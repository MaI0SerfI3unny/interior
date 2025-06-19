from rest_framework import serializers
from .models import Folder, Photo
from interior_gen.models import GeneratedImage as GenImageModel


class PhotoInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['original', 'style', 'room', 'result', 'prompt']


class PhotoOutputSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()

    class Meta:
        model = Photo
        fields = [
            'id',
            'original', 'style', 'room',
            'result', 'prompt', 'added_at'
        ]
        read_only_fields = ['id', 'added_at']

    def get_id(self, obj):
        gen = GenImageModel.objects.filter(
            user=self.context['request'].user,
            image_url=obj.result
        ).first()
        return gen.id if gen else None


class FolderSerializer(serializers.ModelSerializer):
    photos = PhotoOutputSerializer(many=True, read_only=True)

    class Meta:
        model = Folder
        fields = ['id', 'title', 'photos', 'created_at']
        read_only_fields = ['id', 'created_at']


class FolderWithPhotoSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=150)
    photo = PhotoInputSerializer()
