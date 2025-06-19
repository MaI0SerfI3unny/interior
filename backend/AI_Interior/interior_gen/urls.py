from django.urls import path
from .views import GenerateImageAPIView, ImageStatusAPIView, FallbackImageAPIView

urlpatterns = [
    path('generate/', GenerateImageAPIView.as_view(), name='generate-image'),
    path('fallback-generate/', FallbackImageAPIView.as_view(), name='generate-image'),
    path('status/',   ImageStatusAPIView.as_view(),    name='image-status'),

]
