from django.urls import path, include
from .views import RegisterView
from .views import (
    RegisterView,
    LoginView,
    UserView,
    ChangePasswordView,
    ChangeEmailView,
    DeleteUserView,
    UpdateUserImageView,
    ForgotPasswordView,
    ResetPasswordView,
    GoogleAuthURLView,
    GoogleAuthCallbackView,
    ChangeNameView,
    UploadBase64ImageView
)

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('recovery', ForgotPasswordView.as_view()),
    path('recovery/complete', ResetPasswordView.as_view()),
    path('user', UserView.as_view()),
    path('user/password', ChangePasswordView.as_view()),
    path('user/email', ChangeEmailView.as_view()),
    path('user/name', ChangeNameView.as_view()),
    path('user/delete', DeleteUserView.as_view()),
    path('user/photo', UpdateUserImageView.as_view()),
    path("google", GoogleAuthURLView.as_view()),
    path("google/callback/", GoogleAuthCallbackView.as_view()),
    path("generate/upload", UploadBase64ImageView.as_view()),
]
