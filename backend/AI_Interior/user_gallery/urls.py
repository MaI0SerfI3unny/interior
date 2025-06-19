from django.urls import path
from .views import FolderListAPIView, FolderPhotoAPIView, PhotoListAPIView

urlpatterns = [
    path('folders/', FolderListAPIView.as_view(), name='folder-list'),
    path('folders/photos/', FolderPhotoAPIView.as_view(), name='folder-photos'),
    path('photos/', PhotoListAPIView.as_view(), name='photo-list'),
]
