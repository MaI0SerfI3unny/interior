from django.db import transaction
from django.db.models import F
from django.utils import timezone

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from celery.result import AsyncResult

from .models import GeneratedImage
from .serializers import GenerateImageSerializer, FallbackImageSerializer
from .utils import build_payload, build_fallback_payload, encode_url_to_base64
from .tasks import generate_image_task, generate_fallback_task

from rest_framework.test import APIRequestFactory
from accounts.views import UploadBase64ImageView


class GenerateImageAPIView(APIView):
    parser_classes = [MultiPartParser, FormParser, JSONParser]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="Запуск генерації зображення",
        request_body=GenerateImageSerializer,
        responses={202: openapi.Response('Accepted')}
    )
    def post(self, request):
        user = request.user
        if user.freeCount <= 0:
            return Response(
                {'detail': 'No free generations left'},
                status=status.HTTP_400_BAD_REQUEST
            )
        User = user.__class__
        with transaction.atomic():
            updated = User.objects.filter(
                pk=user.pk,
                freeCount__gt=0
            ).update(freeCount=F('freeCount') - 1)
            if not updated:
                return Response(
                    {'detail': 'No free generations left'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        serializer = GenerateImageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        prompt = serializer.validated_data['prompt']
        image_url = serializer.validated_data.get('image', None)

        payload = build_payload(image_url=image_url, prompt=prompt)
        task = generate_image_task.apply_async(args=[payload])

        return Response({'task_id': task.id}, status=status.HTTP_202_ACCEPTED)


class FallbackImageAPIView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    @swagger_auto_schema(
        operation_summary="Генерація на резервному апі зображення(base64)",
        request_body=FallbackImageSerializer,
        responses={202: openapi.Response('Accepted')}
    )
    def post(self, request):
        serializer = FallbackImageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data_url = serializer.validated_data['base64_image']
        payload = build_fallback_payload(
            base64_image=data_url,
            custom=serializer.validated_data.get('custom'),
            theme=serializer.validated_data.get('theme'),
            room=serializer.validated_data.get('room'),
        )
        task = generate_fallback_task.apply_async(args=[payload])
        return Response({'task_id': task.id}, status=status.HTTP_202_ACCEPTED)


class ImageStatusAPIView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="Отримання статусу задачі",
        manual_parameters=[
            openapi.Parameter('task_id', openapi.IN_QUERY, description="ID таски", type=openapi.TYPE_STRING)
        ],
        responses={200: openapi.Response('Status')}
    )
    def get(self, request):
        task_id = request.query_params.get('task_id')
        if not task_id:
            return Response({'error': 'task_id required'}, status=status.HTTP_400_BAD_REQUEST)

        result = AsyncResult(task_id)
        state = result.state

        if state == 'PENDING':
            return Response({'status': 'pending'})
        if state in ('RETRY', 'STARTED'):
            return Response({'status': 'in progress'})
        if state == 'FAILURE':
            return Response({'status': 'error', 'msg': str(result.result)})

        if state == 'SUCCESS':
            replicate_url = result.result

            try:
                data_url, mime_type = encode_url_to_base64(replicate_url)
                # data_url = "data:image/webp;base64,AAABBBCCC..."
                factory = APIRequestFactory()
                auth_header = request.META.get('HTTP_AUTHORIZATION')

                upload_req = factory.post(
                    '/api/upload/',
                    {'photo': data_url},
                    format='json',
                    HTTP_AUTHORIZATION=auth_header
                )
                upload_req.user = request.user
                upload_resp = UploadBase64ImageView.as_view()(upload_req)
                if upload_resp.status_code != 200:
                    raise RuntimeError(f"Upload failed, status {upload_resp.status_code}")

                uploaded_url = upload_resp.data.get('url')
                if not uploaded_url:
                    raise RuntimeError("No 'url' in upload response")

            except Exception as e:
                return Response({
                    'status': 'error',
                    'detail': 'UPLOAD_FAILED',
                    'original_url': replicate_url,
                    'msg': str(e)
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            GeneratedImage.objects.create(
                user=request.user,
                image_url=uploaded_url,
                saved=False,
                created_at=timezone.now()
            )
            return Response({'status': 'succeeded', 'url': uploaded_url})

        return Response({'status': state.lower()})
