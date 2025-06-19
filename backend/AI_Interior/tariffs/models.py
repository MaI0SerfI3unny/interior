from django.db import models
from accounts.models import User
from django.utils import timezone

class Feature(models.Model):
    code = models.CharField(max_length=100, unique=True)
    default_label = models.CharField(max_length=255)

    def __str__(self):
        return self.code

class Tariff(models.Model):
    name = models.CharField(max_length=100, unique=True)
    price_monthly = models.DecimalField(max_digits=8, decimal_places=2)
    price_yearly = models.DecimalField(max_digits=8, decimal_places=2)
    features = models.ManyToManyField(Feature, through="TariffFeature")

    def __str__(self):
        return self.name


class TariffFeature(models.Model):
    PERIOD_CHOICES = (
        ('month', 'Monthly'),
        ('year', 'Yearly'),
    )

    tariff = models.ForeignKey(Tariff, on_delete=models.CASCADE)
    feature = models.ForeignKey(Feature, on_delete=models.CASCADE)
    period = models.CharField(max_length=10, choices=PERIOD_CHOICES)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('tariff', 'feature', 'period')
        ordering = ['order']

    def __str__(self):
        return f"{self.tariff.name} — {self.feature.code} ({self.period})"


class Plan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="plans")
    tariff = models.ForeignKey(Tariff, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    def is_active(self):
        now = timezone.now()
        return self.start_date <= now <= self.end_date


class PaymentDetail(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payment_details')
    card_token = models.CharField(max_length=20, unique=True)
    card_expired = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.card_token} ({self.card_expired})"


class PaymentHistory(models.Model):
    STATUS_CHOICES = [
        ('success', 'success'),
        ('error', 'error'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payment_history')
    tariff = models.ForeignKey(Tariff, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(default=timezone.now)
    payment_detail = models.ForeignKey(PaymentDetail, on_delete=models.SET_NULL, null=True, blank=True, related_name='histories')

    def __str__(self):
        return f"{self.user.email} — {self.tariff.name} — {self.status} — {self.created_at.strftime('%Y-%m-%d')}"
