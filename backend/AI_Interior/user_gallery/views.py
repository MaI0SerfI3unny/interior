from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from .models import Folder, Photo
from .serializers import (
    FolderSerializer,
    PhotoInputSerializer,
    PhotoOutputSerializer,
    FolderWithPhotoSerializer
)
from .services import mark_image_saved, mark_image_unsaved, cleanup_folder_after_photo_deletion
from interior_gen.models import GeneratedImage as GenImageModel



class FolderListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="Get user folders list",
        responses={200: FolderSerializer(many=True)}
    )
    def get(self, request):
        folders = Folder.objects.filter(user=request.user)
        ser = FolderSerializer(folders, many=True, context={'request': request})
        return Response(ser.data)


class FolderPhotoAPIView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="Create folder (if not exists) and/or add photo",
        request_body=FolderWithPhotoSerializer,
        responses={
            201: openapi.Response('Created', FolderSerializer),
            400: 'Bad Request',
            401: 'Unauthorized'
        }
    )
    def post(self, request):
        ser = FolderWithPhotoSerializer(data=request.data, context={'request': request})
        ser.is_valid(raise_exception=True)
        payload = ser.validated_data

        folder, created = Folder.objects.get_or_create(
            user=request.user,
            title=payload['title']
        )

        photo_url = payload['photo']['result']

        gen = GenImageModel.objects.filter(image_url=photo_url).first()

        if not gen:
            return Response(
                {'detail': 'This photo does not exist in the generation records.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if gen.user != request.user:
            return Response(
                {'detail': 'This photo does not belong to the current user.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if folder.photos.filter(result=photo_url).exists():
            return Response(
                {'detail': 'This photo has already been added to the folder.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        p_ser = PhotoInputSerializer(data=payload['photo'])
        p_ser.is_valid(raise_exception=True)
        photo = p_ser.save(folder=folder)
        mark_image_saved(request.user, photo.result)

        photo_out = PhotoOutputSerializer(photo, context={'request': request}).data
        if created:
            return Response(
                FolderSerializer(folder, context={'request': request}).data,
                status=status.HTTP_201_CREATED
            )
        return Response(photo_out, status=status.HTTP_201_CREATED)
    @swagger_auto_schema(
        operation_summary="Delete photo from folder (and folder if empty)",
        manual_parameters=[
            openapi.Parameter('folderId', openapi.IN_QUERY, type=openapi.TYPE_INTEGER, required=True),
            openapi.Parameter('photoId',  openapi.IN_QUERY, type=openapi.TYPE_INTEGER, required=True),
        ],
        responses={204: 'No Content', 400: 'Bad Request', 404: 'Not Found'}
    )
    def delete(self, request):
        folder_id = request.query_params.get('folderId')
        gen_id = request.query_params.get('photoId')
        if not folder_id or not gen_id:
            return Response({'detail': 'folderId and photoId required'}, status=status.HTTP_400_BAD_REQUEST)

        folder = Folder.objects.filter(user=request.user, pk=folder_id).first()
        if not folder:
            return Response({'detail': 'Folder not found'}, status=status.HTTP_404_NOT_FOUND)

        gen = GenImageModel.objects.filter(user=request.user, pk=gen_id).first()
        if not gen:
            return Response({'detail': 'GeneratedImage not found'}, status=status.HTTP_404_NOT_FOUND)

        photo = folder.photos.filter(result=gen.image_url).first()
        if not photo:
            return Response({'detail': 'Photo not found in folder'}, status=status.HTTP_404_NOT_FOUND)

        mark_image_unsaved(request.user, photo.result)
        photo.delete()
        cleanup_folder_after_photo_deletion(folder)
        return Response(status=status.HTTP_204_NO_CONTENT)

class PhotoListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="List of all photos of the current user",
        responses={200: openapi.Response('OK', PhotoOutputSerializer(many=True))}
    )
    def get(self, request):
        all_photos = Photo.objects.filter(folder__user=request.user)
        unique = []
        seen_ids = set()

        for photo in all_photos:
            gen = GenImageModel.objects.filter(
                user=request.user,
                image_url=photo.result
            ).first()
            gen_id = gen.id if gen else None
            if gen_id not in seen_ids:
                seen_ids.add(gen_id)
                unique.append(photo)

        serializer = PhotoOutputSerializer(unique, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

