from .models import Folder
from interior_gen.models import GeneratedImage


def mark_image_saved(user, image_url):
    GeneratedImage.objects.filter(
        user=user,
        image_url=image_url
    ).update(saved=True)


def mark_image_unsaved(user, image_url):
    GeneratedImage.objects.filter(
        user=user,
        image_url=image_url
    ).update(saved=False)


def cleanup_folder_after_photo_deletion(folder: Folder):
    if not folder.photos.exists():
        folder.delete()
