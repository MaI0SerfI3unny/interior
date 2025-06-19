from django.urls import path
from .views import TariffListView, CreateTariffPaymentView, LiqPayCallbackView,DeleteUserPlanView

urlpatterns = [
    path('tariffs/', TariffListView.as_view(), name='tariff-list'),
    path('tariffs/create', CreateTariffPaymentView.as_view()),
    path('tariffs/delete', DeleteUserPlanView.as_view()),
    path('liqpay/callback', LiqPayCallbackView.as_view()),
]
