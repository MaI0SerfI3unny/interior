from .models import Tariff, Feature, TariffFeature

def seed_tariffs():
    if Tariff.objects.exists():
        return

    feature_map = {
        "free_generation_10": "10 генерацій інтер’єрів",
        "queue_waiting": "Чергування на генерацію",
        "history_limit_5": "Історія до 5 генерацій",
        "free_generation_100": "100 генерацій інтер’єрів",
        "no_queue": "Генерація без очікування в черзі",
        "commercial_use": "Доступно для комерційного використання",
        "unlimited_history": "Безлімітна історія генерацій",
        "unlimited_generation": "Безлімітна кількість генерацій",
        "free_generation_1200": "1200 генерацій інтер’єрів",
        "uncommercial": "Для некомерційного використання"
    }

    for code, label in feature_map.items():
        Feature.objects.get_or_create(code=code, defaults={"default_label": label})

    tariffs_data = [
        {
            "name": "Free",
            "price_monthly": 0.00,
            "price_yearly": 0.00,
            "features": {
                "month": [
                    "free_generation_10",
                    "queue_waiting",
                    "uncommercial",
                    "history_limit_5"
                ],
                "year": [
                    "free_generation_10",
                    "queue_waiting",
                    "uncommercial",
                    "history_limit_5"
                ],
            },
        },
        {
            "name": "Premium",
            "price_monthly": 7.99,
            "price_yearly": 80.99,
            "features": {
                "month": [
                    "free_generation_100",
                    "no_queue",
                    "commercial_use",
                    "unlimited_history"
                ],
                "year": [
                    "free_generation_1200",
                    "no_queue",
                    "commercial_use",
                    "unlimited_history"
                ],
            },
        },
        {
            "name": "Pro",
            "price_monthly": 12.99,
            "price_yearly": 120.99,
            "features": {
                "month": [
                    "unlimited_generation",
                    "no_queue",
                    "commercial_use",
                    "unlimited_history"
                ],
                "year": [
                    "unlimited_generation",
                    "no_queue",
                    "commercial_use",
                    "unlimited_history"
                ],
            },
        },
    ]

    for tariff_data in tariffs_data:
        features = tariff_data.pop("features")
        tariff = Tariff.objects.create(**tariff_data)

        for period, feature_codes in features.items():
            for order_index, code in enumerate(feature_codes):
                feature = Feature.objects.get(code=code)
                TariffFeature.objects.create(
                    tariff=tariff,
                    feature=feature,
                    period=period,
                    order=order_index
                )
