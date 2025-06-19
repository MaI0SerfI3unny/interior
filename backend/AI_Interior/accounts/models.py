from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import BaseUserManager
import uuid
from django.utils import timezone

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if not password:
            raise ValueError("Superuser must have a password")

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    REGISTRATION_TYPES = [
        ('normal', 'Normal'),
        ('google', 'Google')
    ]
    username = None
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    freeCount = models.PositiveIntegerField(default=10)
    image = models.ImageField(upload_to='user_photos/', null=True, blank=True)
    registration_type = models.CharField(max_length=10, choices=REGISTRATION_TYPES, default='normal')

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

class PasswordResetToken(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    used = models.BooleanField(default=False)

    def is_expired(self):
        return timezone.now() > self.created_at + timezone.timedelta(hours=1)
