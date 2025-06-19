from rest_framework import serializers
from .models import GeneratedImage

class GenerateImageSerializer(serializers.Serializer):
    prompt = serializers.CharField()
    image = serializers.CharField(required=False)

class FallbackImageSerializer(serializers.Serializer):
    image = serializers.ImageField()
    custom = serializers.CharField(required=False, allow_blank=True)
    theme = serializers.CharField(max_length=100, required=False, allow_blank=True)
    room = serializers.CharField(max_length=100, required=False, allow_blank=True)

class GeneratedImageSerializer(serializers.ModelSerializer):
    class Meta:
        model  = GeneratedImage
        fields = ['id', 'image_url', 'saved', 'created_at']
        read_only_fields = ['id', 'created_at']
