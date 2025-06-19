from django.conf import settings
from django.db import models

class GeneratedImage(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='generated_images'
    )
    image_url = models.URLField(max_length=1000)
    saved     = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
