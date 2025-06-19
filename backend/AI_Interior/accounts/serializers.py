from rest_framework import serializers
from .models import User
from tariffs.models import Plan, Tariff
from django.utils import timezone
from tariffs.models import User, PaymentDetail, PaymentHistory

class FakePlan:
    def __init__(self, tariff_name):
        self.tariff_name = tariff_name
        self.start_date = None
        self.end_date = None

class ActivePlanSerializer(serializers.ModelSerializer):
    tariff_name = serializers.CharField(source='tariff.name')

    class Meta:
        model = Plan
        fields = ['tariff_name', 'start_date', 'end_date']

class ChangeNameSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=30)

class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()
    link_to_redirect = serializers.CharField()

class ResetPasswordSerializer(serializers.Serializer):
    token = serializers.UUIDField()
    new_password = serializers.CharField()
    confirm_password = serializers.CharField()

    def validate(self, data):
        if data['new_password'] != data['confirm_password']:
            raise serializers.ValidationError({'detail': 'PASSWORDS_DO_NOT_MATCH'})
        return data

class RegisterSerializer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField()
    new_password = serializers.CharField()
    confirm_new_password = serializers.CharField()

class ChangeEmailSerializer(serializers.Serializer):
    new_email = serializers.EmailField()

class UploadUserImageSerializer(serializers.Serializer):
    photo = serializers.CharField()

class TariffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tariff
        fields = '__all__'
        ref_name = "TariffSerializerAccounts"
        fields = ['id', 'name']

class PaymentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentDetail
        fields = ['card_token', 'card_expired']

class PaymentHistorySerializer(serializers.ModelSerializer):
    tariff = TariffSerializer()
    payment_detail = PaymentDetailSerializer()

    class Meta:
        model = PaymentHistory
        fields = ['tariff', 'amount', 'status', 'created_at', 'payment_detail']

class UserSerializer(serializers.ModelSerializer):
    active_plan = serializers.SerializerMethodField()
    payment_details = PaymentDetailSerializer(many=True, read_only=True)
    payment_history = PaymentHistorySerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'password', 'freeCount','image', 'active_plan', 'registration_type', 'payment_details', 'payment_history']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def get_active_plan(self, user):
        plan = user.plans.filter(start_date__lte=timezone.now(), end_date__gte=timezone.now()).first()
        if plan:
            return ActivePlanSerializer(plan).data

        free_tariff = Tariff.objects.get(name__iexact="Free")
        return {
            "tariff_name": free_tariff.name,
            "start_date": None,
            "end_date": None,
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
