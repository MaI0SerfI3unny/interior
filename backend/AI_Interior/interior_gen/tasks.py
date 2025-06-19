import time

from celery.exceptions import SoftTimeLimitExceeded
from celery import shared_task
from .utils import post_interior, get_interior_status, post_fallback_api


@shared_task(
    bind=True,
    rate_limit='5/m',
    max_retries=3,
    default_retry_delay=10,
    soft_time_limit=60,
    time_limit=65
)
def generate_image_task(self, payload):
    try:
        data = post_interior(payload)
        task_id = data['id']

        while True:
            status = get_interior_status(task_id)['status']
            if status == 'succeeded':
                return get_interior_status(task_id)['output']
            if status == 'error':
                raise RuntimeError('API error')

            time.sleep(1)

    except SoftTimeLimitExceeded:
        raise RuntimeError('Timeout waiting for interior generation')
    except Exception as exc:
        raise self.retry(exc=exc)

@shared_task(
    bind=True,
    rate_limit='5/m',
    max_retries=3,
    default_retry_delay=10,
    soft_time_limit=60,
    time_limit=65
)
def generate_fallback_task(self, payload):
    try:
        response = post_fallback_api(payload)
        image_url = (
                response.get('image')
                or response.get('url')
                or response.get('image_url')
                or response.get('generated_image_url')
        )
        if not image_url:
            raise RuntimeError('Invalid response from fallback API')
        return image_url

    except SoftTimeLimitExceeded:
        raise RuntimeError('Timeout waiting for fallback generation')
    except Exception as exc:
        raise self.retry(exc=exc)
