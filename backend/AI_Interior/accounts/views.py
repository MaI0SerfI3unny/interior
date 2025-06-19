from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed, ValidationError
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer, ChangePasswordSerializer, ChangeEmailSerializer, UploadUserImageSerializer, ForgotPasswordSerializer, ResetPasswordSerializer, ChangeNameSerializer
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from .authentication import CustomJWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from utils.email import send_reset_email
import uuid, requests, base64
from django.core.files.base import ContentFile
from .models import User, PasswordResetToken
from django.conf import settings
import urllib.parse
from django.shortcuts import redirect
import os

class RegisterView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_description="Реєстрація",
        request_body=RegisterSerializer
    )
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        response = Response()
        response.data = {
            'data': access_token
        }
        return response


class LoginView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_description="Авторизація",
        request_body=LoginSerializer
    )
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = User.objects.filter(email=email).first()

        if user is None or not user.check_password(password):
            raise ValidationError({ 'detail': 'INVALID_CREDENTIALS'})

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        response = Response()

        response.data = {
            'data': access_token
        }
        return response


class UserView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Отримання даних користувача через JWT (Authorization: Bearer)",
        security=[{'Bearer': []}],
        responses={200: UserSerializer()}
    )
    def get(self, request):
        user = User.objects.get(pk=request.user.pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class ChangePasswordView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Зміна пароля користувача",
        security=[{'Bearer': []}],
        request_body=ChangePasswordSerializer,
        responses={200: "{'detail': 'PASSWORD_UPDATED'}"}
    )
    def patch(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = request.user
        old = serializer.validated_data['old_password']
        new = serializer.validated_data['new_password']
        confirm = serializer.validated_data['confirm_new_password']

        if not user.check_password(old):
            raise ValidationError({'detail': 'OLD_PASSWORD_INCORRECT'})

        if new != confirm:
            raise ValidationError({'detail': 'PASSWORDS_DO_NOT_MATCH'})

        user.set_password(new)
        user.save()
        return Response({'detail': 'PASSWORD_UPDATED'})


class ChangeNameView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Зміна імені користувача",
        security=[{'Bearer': []}],
        request_body=ChangeNameSerializer,
        responses={200: "{'detail': 'NAME_UPDATED'}"}
    )
    def patch(self, request):
        serializer = ChangeNameSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        new_name = serializer.validated_data["name"]
        request.user.name = new_name
        request.user.save()

        return Response({'detail': 'NAME_UPDATED'})


class ChangeEmailView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Зміна електронної пошти користувача",
        security=[{'Bearer': []}],
        request_body=ChangeEmailSerializer,
        responses={200: "{'detail': 'EMAIL_UPDATED'}"}
    )
    def patch(self, request):
        serializer = ChangeEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        new_email = serializer.validated_data['new_email']
        if User.objects.filter(email=new_email).exclude(pk=request.user.pk).exists():
            raise ValidationError({'detail': 'EMAIL_ALREADY_EXISTS'})

        request.user.email = new_email
        request.user.save()
        return Response({'detail': 'EMAIL_UPDATED'})


class DeleteUserView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]
    @swagger_auto_schema(
        operation_description="Видалення власного акаунта",
        security=[{'Bearer': []}],
        responses={200: "{'detail': 'USER_DELETED'}"}
    )
    def delete(self, request):
        request.user.delete()
        return Response({'detail': 'USER_DELETED'})


class UpdateUserImageView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Оновити фото профілю (base64)",
        request_body=UploadUserImageSerializer,
        security=[{'Bearer': []}],
        responses={200: "{'detail': 'IMAGE_UPDATED'}"}
    )
    def patch(self, request):
        serializer = UploadUserImageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        image_data = serializer.validated_data.get("photo", "")

        if not image_data.startswith("data:image/") or ";base64," not in image_data:
            raise ValidationError({'detail': 'INCORRECT_PHOTO'})

        try:
            header, base64_data = image_data.split(";base64,")
            mime_type = header.split(":")[1]

            if mime_type not in ['image/png', 'image/jpeg', 'image/jpg']:
                raise ValidationError({'detail': 'INCORRECT_FORMAT'})

            base64.b64decode(base64_data, validate=True)
        except Exception:
            raise ValidationError({'detail': 'INVALID_PHOTO'})

        ext = mime_type.split("/")[-1]
        file_name = f"{uuid.uuid4()}.{ext}"
        image_file = ContentFile(base64.b64decode(base64_data), name=file_name)

        request.user.image = image_file
        request.user.save()

        return Response({'detail': 'IMAGE_UPDATED'})


class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_description="Надсилання листа для скидання пароля",
        request_body=ForgotPasswordSerializer,
        responses={200: "{'detail': 'EMAIL_SENT'}"}
    )
    def post(self, request):
        serializer = ForgotPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data["email"]
        link_to_redirect = serializer.validated_data["link_to_redirect"]

        user = User.objects.filter(email=email).first()
        if not user:
            raise ValidationError({"detail": "NOT_FOUND_USER"})

        reset_token = PasswordResetToken.objects.create(user=user)

        reset_url = f"{link_to_redirect}?token={reset_token.token}"

        send_reset_email(
            email,
            "Відновлення пароля",
            f"Щоб скинути пароль, перейдіть за посиланням:\n{reset_url}"
        )
        return Response({"detail": "EMAIL_SENT"})


class ResetPasswordView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        operation_description="Скидання пароля за токеном",
        request_body=ResetPasswordSerializer,
        responses={200: "{'detail': 'PASSWORD_UPDATED'}"}
    )
    def post(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        token = serializer.validated_data["token"]
        new_password = serializer.validated_data["new_password"]

        try:
            reset_record = PasswordResetToken.objects.get(token=token, used=False)
        except PasswordResetToken.DoesNotExist:
            raise ValidationError({"detail": "INVALID_OR_USED_TOKEN"})

        if reset_record.is_expired():
            raise ValidationError({"detail": "TOKEN_EXPIRED"})

        user = reset_record.user
        user.set_password(new_password)
        user.save()

        reset_record.used = True
        reset_record.save()

        return Response({"detail": "PASSWORD_UPDATED"})


class GoogleAuthURLView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        base_url = "https://accounts.google.com/o/oauth2/v2/auth"
        params = {
            "client_id": settings.GOOGLE_CLIENT_ID,
            "redirect_uri": settings.GOOGLE_REDIRECT_URI,
            "response_type": "code",
            "scope": "openid email profile",
            "access_type": "offline",
            "prompt": "consent"
        }
        url = f"{base_url}?{urllib.parse.urlencode(params)}"
        return Response({"auth_url": url})


class GoogleAuthCallbackView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        def redirect_back(token=""):
            return redirect(f"{settings.GOOGLE_REDIRECT_URI_FRONT}/signin?token={token}")

        code = request.query_params.get('code')
        if not code:
            return redirect_back()

        try:
            token_res = requests.post(
                'https://oauth2.googleapis.com/token',
                data={
                    'code': code,
                    'client_id': settings.GOOGLE_CLIENT_ID,
                    'client_secret': settings.GOOGLE_CLIENT_SECRET,
                    'redirect_uri': settings.GOOGLE_REDIRECT_URI,
                    'grant_type': 'authorization_code',
                }
            )
            token_json = token_res.json()
            access_token = token_json.get('access_token')
            if not access_token:
                return redirect_back()

            user_info = requests.get(
                'https://www.googleapis.com/oauth2/v1/userinfo',
                params={'alt': 'json', 'access_token': access_token}
            ).json()

            email = user_info.get('email')
            name = user_info.get('name')
            if not email:
                return redirect_back()

            random_password = uuid.uuid4().hex
            user, created = User.objects.get_or_create(email=email, defaults={
                'name': name or email.split('@')[0],
                'registration_type': 'google',
                'password': random_password
            })

            if created:
                user.set_password(random_password)
                user.save()

            refresh = RefreshToken.for_user(user)
            return redirect_back(str(refresh.access_token))

        except Exception:
            return redirect_back()


class UploadBase64ImageView(APIView):
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Завантажити фото (base64) без збереження в модель",
        request_body=UploadUserImageSerializer,
        security=[{'Bearer': []}],
        responses={200: "{'url': 'media/uploads/...'}"}
    )
    def post(self, request):
        serializer = UploadUserImageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        image_data = serializer.validated_data.get("photo", "")

        if not image_data.startswith("data:image/") or ";base64," not in image_data:
            raise ValidationError({'detail': 'INCORRECT_PHOTO'})

        try:
            header, base64_data = image_data.split(";base64,")
            mime_type = header.split(":")[1]

            if mime_type not in ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']:
                raise ValidationError({'detail': 'INCORRECT_FORMAT'})

            base64.b64decode(base64_data, validate=True)
        except Exception:
            raise ValidationError({'detail': 'INVALID_PHOTO'})

        ext = mime_type.split("/")[-1]
        file_name = f"{uuid.uuid4()}.{ext}"
        relative_path = os.path.join("uploads", file_name)
        full_path = os.path.join(settings.MEDIA_ROOT, relative_path)

        os.makedirs(os.path.dirname(full_path), exist_ok=True)

        with open(full_path, "wb") as f:
            f.write(base64.b64decode(base64_data))

        image_url = f"{settings.MEDIA_URL}{relative_path}"
        return Response({'url': image_url})
