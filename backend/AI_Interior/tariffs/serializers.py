from rest_framework import serializers
from .models import Tariff, TariffFeature, Feature

class CreateTariffPaymentSerializer(serializers.Serializer):
    tariff_id = serializers.IntegerField()
    subscription_type = serializers.ChoiceField(choices=["month", "year"])


class TariffSerializer(serializers.ModelSerializer):
    features_month = serializers.SerializerMethodField()
    features_year = serializers.SerializerMethodField()

    class Meta:
        model = Tariff
        fields = '__all__'
        ref_name = "TariffSerializerTariffs"
        fields = ['id', 'name', 'price_monthly', 'price_yearly', 'features_month', 'features_year']

    def get_features_month(self, obj):
        return self._get_features_by_period(obj, 'month')

    def get_features_year(self, obj):
        return self._get_features_by_period(obj, 'year')

    def _get_features_by_period(self, obj, period):
        return list(
            TariffFeature.objects
                .filter(tariff=obj, period=period)
                .order_by('order')
                .values_list('feature__code', flat=True)
        )