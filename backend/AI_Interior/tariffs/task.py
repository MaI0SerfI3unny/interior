from celery import shared_task
from django.utils import timezone
from .models import Plan

@shared_task
def deactivate_expired_plans():
    now = timezone.now()
    expired_plans = Plan.objects.filter(end_date__lt=now)
    count = expired_plans.count()
    expired_plans.delete()

    return f"Deactivated {count} expired plans"