from rest_framework import serializers
from djangowatch.models import Details
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer


User = get_user_model()


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password']


class WatchSerializer(serializers.ModelSerializer):
    class Meta:
        model=Details
        fields='__all__'