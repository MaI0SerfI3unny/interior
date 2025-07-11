import os
from decouple import config, Csv
from datetime import timedelta
from celery.schedules import crontab

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FORCE_SCRIPT_NAME = config('FORCE_SCRIPT_NAME', default='')

SECRET_KEY = config('SECRET_KEY')
DEBUG      = config('DEBUG', default=False, cast=bool)

LIQPAY_PUBLIC_KEY = "sandbox_i38967396852"
LIQPAY_PRIVATE_KEY = "sandbox_lQ2gshk2cVMXP4oniQm3jUZn7yO31ulmPjJJyuQl"
LIQPAY_CALLBACK_URL = "https://interior.azmo.io/backend/api/liqpay/callback"

GOOGLE_CLIENT_ID = "289121560093-3hsd5nk1r90egvl2kkd7vp1jcd04t9q3.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET = "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"
GOOGLE_REDIRECT_URI="https://interior.azmo.io/backend/api/google/callback/"
GOOGLE_REDIRECT_URI_FRONT="https://interior.azmo.io"


ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='localhost,127.0.0.1', cast=Csv())

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_HSTS_SECONDS = 0  # Disable HSTS

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_celery_beat',
    'rest_framework',
    'rest_framework_simplejwt',
    'drf_yasg',
    'interior_gen',
    'django_celery_results',
    'accounts',
    'tariffs',
    'corsheaders',
    'user_gallery'
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'EXCEPTION_HANDLER': 'accounts.exceptions.custom_exception_handler',
}

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware'
]

ROOT_URLCONF = 'AI_Interior.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [ os.path.join(BASE_DIR, 'templates') ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

SWAGGER_SETTINGS = {
    'USE_SESSION_AUTH': False,
    'SECURITY_DEFINITIONS': {
        'Bearer': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header',
            'description': 'JWT Authorization header using the Bearer scheme. Example: "Bearer <token>"',
        }
    }
}

WSGI_APPLICATION = 'AI_Interior.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': config('DB_ENGINE'),
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': config('DB_PORT'),
    }
}


LANGUAGE_CODE = 'en-us'
TIME_ZONE     = 'Europe/Kyiv'
USE_I18N      = True
USE_L10N      = True
USE_TZ        = True


STATIC_URL  = config('STATIC_URL', default='/static/')
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

MEDIA_URL  = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=2),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'AUTH_HEADER_TYPES': ('Bearer',),
}

# Celery
# CELERY_BROKER_URL        = config('CELERY_BROKER_URL', default='broker_url = "redis://redis:6381/0"')
# CELERY_RESULT_BACKEND    = 'django-db'
CELERY_BROKER_URL = os.getenv("CELERY_BROKER_URL", "redis://redis:6381/0")
CELERY_RESULT_BACKEND = os.getenv("CELERY_RESULT_BACKEND", "redis://redis:6381/0")
CELERY_ACCEPT_CONTENT    = ['json']
CELERY_TASK_SERIALIZER   = 'json'
CELERY_RESULT_SERIALIZER = 'json'
AUTH_USER_MODEL = 'accounts.User'
CORS_ALLOW_ALL_ORIGINS = True


CELERY_BEAT_SCHEDULE = {
    'deactivate-expired-plans-every-5-minutes': {
        'task': 'plans.tasks.deactivate_expired_plans',
        'schedule': crontab(minute='*/5'),
    },
}