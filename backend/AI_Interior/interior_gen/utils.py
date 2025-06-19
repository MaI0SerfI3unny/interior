import os
import requests
import base64
import mimetypes

from django.conf import settings

API_URL = os.getenv("API_URL")
SECONDARY_API_URL = os.getenv("SECONDARY_API_URL")

HEADERS = {
    'Accept': os.getenv("API_ACCEPT", "*/*"),
    'Content-Type': os.getenv("API_CONTENT_TYPE", "application/json"),
    'Origin': os.getenv("API_ORIGIN"),
    'Referer': os.getenv("API_REFERER"),
    'User-Agent': os.getenv("API_USER_AGENT", "Mozilla/5.0")
}

# Fallback API headers
SECONDARY_HEADERS = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
}

def build_payload(image_url: str, prompt: str) -> dict:
    return {
        'image': image_url,
        'version': 'black-forest-labs/flux-1.1-pro',
        'prompt': prompt,
        'guidance': 25,
        'steps': 28,
    }

def post_interior(payload: dict) -> dict:
    resp = requests.post(API_URL, headers=HEADERS, json=payload)
    resp.raise_for_status()
    return resp.json()

def get_interior_status(task_id: str) -> dict:
    resp = requests.get(API_URL, headers=HEADERS, params={'id': task_id})
    resp.raise_for_status()
    return resp.json()

def encode_image_to_base64(image_path: str) -> tuple[str, str]:
    mime_type, _ = mimetypes.guess_type(image_path)
    with open(image_path, "rb") as image_file:
        image_data = image_file.read()
    base64_str = base64.b64encode(image_data).decode("utf-8")
    return f"data:{mime_type};base64,{base64_str}", mime_type

def build_fallback_payload(base64_image: str, custom: str, theme: str, room: str) -> dict:
    return {
        "imageUrl": base64_image,
        "custom": custom or "",
        "theme": theme or "",
        "room": room or "",
    }

def post_fallback_api(payload: dict) -> dict:
    resp = requests.post(SECONDARY_API_URL, headers=SECONDARY_HEADERS, json=payload)
    resp.raise_for_status()
    return resp.json()

def save_temp_image(uploaded_file) -> str:
    temp_dir = os.path.join(settings.MEDIA_ROOT, 'temp')
    os.makedirs(temp_dir, exist_ok=True)
    path = os.path.join(temp_dir, uploaded_file.name)
    with open(path, 'wb') as f:
        for chunk in uploaded_file.chunks():
            f.write(chunk)
    return path


def encode_url_to_base64(image_url: str) -> tuple[str, str]:
    response = requests.get(image_url)
    response.raise_for_status()
    content = response.content

    mime_type = response.headers.get('Content-Type')
    if not mime_type:
        ext = os.path.splitext(image_url)[1]
        mime_type = mimetypes.types_map.get(ext.lower(), 'application/octet-stream')

    base64_str = base64.b64encode(content).decode('utf-8')
    data_url = f"data:{mime_type};base64,{base64_str}"
    return data_url, mime_type
