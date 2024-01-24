from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import User

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        return user

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}
        read_only_fields = ('id', 'last_login', 'is_active', 'is_staff', 'is_superuser')
