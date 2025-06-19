from django.contrib import admin
from .models import Tariff, Feature, TariffFeature

class TariffFeatureInline(admin.TabularInline):
    model = TariffFeature
    extra = 1

@admin.register(Tariff)
class TariffAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price_monthly', 'price_yearly')
    search_fields = ('name',)
    list_filter = ('price_monthly', 'price_yearly')
    inlines = [TariffFeatureInline]

@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = ('code', 'default_label')
    search_fields = ('code', 'default_label')
