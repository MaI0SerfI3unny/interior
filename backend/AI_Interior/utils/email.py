import requests
from decouple import config

def send_reset_email(email, subject, text):
    API_KEY = config('MAILGUN_API_KEY')
    print(API_KEY)
    DOMAIN = "interior.azmo.io"

    if not API_KEY:
        raise ValueError("MAILGUN_API_KEY not found")

    response = requests.post(
        f"https://api.mailgun.net/v3/{DOMAIN}/messages",
        auth=("api", API_KEY),
        data={
            "from": f"Interior App <postmaster@{DOMAIN}>",
            "to": email,
            "subject": subject,
            "text": text
        }
    )

    if response.status_code != 200:
        raise Exception(f"ERROR: {response.text}")

    return response