from django.apps import AppConfig
import logging

class TariffsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'tariffs'

    def ready(self):
        from django.db.utils import OperationalError, ProgrammingError
        try:
            from .seed import seed_tariffs
            seed_tariffs()
        except (OperationalError, ProgrammingError):
            logging.warning("Skipping tariff seed: DB not ready.")