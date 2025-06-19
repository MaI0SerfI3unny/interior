import json
import base64
import hashlib
import uuid
from urllib.parse import quote
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Tariff, Plan, PaymentDetail, PaymentHistory
from .serializers import TariffSerializer
from drf_yasg.utils import swagger_auto_schema
from .serializers import CreateTariffPaymentSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from accounts.authentication import CustomJWTAuthentication
from dateutil.relativedelta import relativedelta
from accounts.models import User
from rest_framework.permissions import AllowAny
from drf_yasg import openapi
from django.utils import timezone
from rest_framework.exceptions import ValidationError, NotFound

class TariffListView(APIView):
    @swagger_auto_schema(
        operation_description="Отримати список усіх тарифів",
        responses={200: TariffSerializer(many=True)}
    )
    def get(self, request):
        tariffs = Tariff.objects.all()
        serializer = TariffSerializer(tariffs, many=True)
        return Response(serializer.data)


class DeleteUserPlanView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Видалення активного тарифного плану користувача",
        responses={
            200: openapi.Response(description="SUCCESS_DELETE"),
            404: openapi.Response(description="NOT_FOUND")
        }
    )
    def delete(self, request):
        user = request.user
        now = timezone.now()

        deleted, _ = Plan.objects.filter(user=user, end_date__gt=now).delete()

        if deleted == 0:
            return Response({"detail": "NOT_FOUND"}, status=404)

        user.freeCount = 0
        user.save()
        return Response({"detail": "SUCCESS_DELETE"}, status=200)



class CreateTariffPaymentView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Створення посилання на оплату тарифу через LiqPay",
        request_body=CreateTariffPaymentSerializer,
        security=[{'Bearer': []}]
    )
    def post(self, request):
        tariff_id = request.data.get("tariff_id")
        subscription_type = request.data.get("subscription_type")

        if subscription_type not in ("month", "year"):
            raise ValidationError({"detail": "INVALID_SUBSCRIPTION_TYPE"})

        tariff = Tariff.objects.filter(id=tariff_id).first()
        if not tariff:
            raise ValidationError({"detail": "TARIFF_NOT_FOUND"})

        if tariff.name.lower() == "free":
            raise ValidationError({"detail": "FREE_TARIFF_NOT_PAYABLE"})

        amount = tariff.price_monthly if subscription_type == "month" else tariff.price_yearly
        order_id = f"user-{request.user.id}-tariff-{tariff.id}-{uuid.uuid4().hex[:8]}"

        description = f"'{tariff.name}' ({subscription_type})"
        server_url = settings.LIQPAY_CALLBACK_URL

        params = {
            "public_key": settings.LIQPAY_PUBLIC_KEY,
            "version": "3",
            "action": "pay",
            "amount": str(amount),
            "currency": "USD",
            "description": description,
            "order_id": order_id,
            "server_url": server_url,
        }

        json_data = json.dumps(params)
        data = base64.b64encode(json_data.encode("utf-8")).decode("utf-8")
        signature_str = settings.LIQPAY_PRIVATE_KEY + data + settings.LIQPAY_PRIVATE_KEY
        sha1 = hashlib.sha1(signature_str.encode("utf-8")).digest()
        signature = base64.b64encode(sha1).decode("utf-8")

        checkout_url = f"https://www.liqpay.ua/api/3/checkout?data={quote(data)}&signature={quote(signature)}"

        return Response({ "checkout_url": checkout_url })


class LiqPayCallbackView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_description="Callback від LiqPay після оплати",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=["data", "signature"],
            properties={
                "data": openapi.Schema(type=openapi.TYPE_STRING),
                "signature": openapi.Schema(type=openapi.TYPE_STRING),
            }
        ),
        responses={200: openapi.Response(description="OK")}
    )
    def post(self, request):
        liqpay_data = request.data.get("data")
        liqpay_signature = request.data.get("signature")

        if not liqpay_data or not liqpay_signature:
            raise ValidationError({"detail": "INVALID_CALLBACK_PAYLOAD"})

        expected_signature_str = settings.LIQPAY_PRIVATE_KEY + liqpay_data + settings.LIQPAY_PRIVATE_KEY
        expected_sha1 = hashlib.sha1(expected_signature_str.encode("utf-8")).digest()
        expected_signature = base64.b64encode(expected_sha1).decode("utf-8")

        if expected_signature != liqpay_signature:
            raise ValidationError({"detail": "SIGNATURE_MISMATCH"})

        decoded_json = base64.b64decode(liqpay_data).decode("utf-8")
        payment_data = json.loads(decoded_json)

        order_id = payment_data.get("order_id")
        status = payment_data.get("status")

        try:
            parts = order_id.split("-")
            user_id = int(parts[1])
            tariff_id = int(parts[3])
        except Exception:
            raise ValidationError({"detail": "INVALID_ORDER_ID_FORMAT"})

        user = User.objects.filter(id=user_id).first()
        tariff = Tariff.objects.filter(id=tariff_id).first()

        if not user or not tariff:
            raise ValidationError({"detail": "USER_OR_TARIFF_NOT_FOUND"})

        card_token = payment_data.get("card_token")
        card_expired = payment_data.get("card_expired")

        payment_detail = None
        if card_token and card_expired:
            payment_detail, _ = PaymentDetail.objects.get_or_create(
                user=user,
                card_token=card_token,
                defaults={"card_expired": card_expired}
            )

        amount = tariff.price_yearly if "year" in payment_data.get("description", "").lower() else tariff.price_monthly

        PaymentHistory.objects.create(
            user=user,
            tariff=tariff,
            amount=amount,
            status="success" if status in ["success", "sandbox"] else "error",
            created_at=timezone.now(),
            payment_detail=payment_detail
        )

        if status in ["success", "sandbox"]:
            now = timezone.now()
            description = payment_data.get("description", "").lower()

            if "year" in description:
                end = now + relativedelta(years=1)
                period = "year"
            elif "month" in description:
                end = now + relativedelta(months=1)
                period = "month"
            else:
                raise ValidationError({"detail": "UNKNOWN_SUBSCRIPTION_TYPE"})

            Plan.objects.filter(user=user, end_date__gt=now).delete()
            Plan.objects.create(
                user=user,
                tariff=tariff,
                start_date=now,
                end_date=end
            )

            freeCount_increment = 0
            tariff_name = tariff.name.lower()

            if tariff_name == "free":
                freeCount_increment = 10
            elif tariff_name == "premium":
                freeCount_increment = 1200 if period == "year" else 100
            elif tariff_name == "pro":
                freeCount_increment = 999999

            if freeCount_increment:
                user.freeCount = (
                    freeCount_increment if freeCount_increment >= 999999 else freeCount_increment
                )
                user.save()

            return Response({"detail": "PLAN_ACTIVATED"})

        return Response({"detail": f"Ignored status: {status}"})
