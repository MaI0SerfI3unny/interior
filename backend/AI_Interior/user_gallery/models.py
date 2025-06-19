from django.conf import settings
from django.db import models

class Folder(models.Model):
    user       = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='folders'
    )
    title      = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}: {self.title}"


class Photo(models.Model):
    folder     = models.ForeignKey(
        Folder,
        on_delete=models.CASCADE,
        related_name='photos'
    )
    original   = models.TextField(
        blank=True, null=True,
    )
    style      = models.CharField(max_length=100)
    room       = models.CharField(max_length=100)
    result     = models.CharField(max_length=1000)
    prompt     = models.TextField()
    added_at   = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Photo {self.id} in folder {self.folder.title}"
