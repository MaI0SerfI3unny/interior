from django.contrib import admin
from django.contrib.auth.models import Group
from django_celery_results.models import TaskResult, GroupResult

admin.site.unregister(Group)
