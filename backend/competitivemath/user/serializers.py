# serializers.py
from djoser.serializers import TokenCreateSerializer
from rest_framework import serializers

class CustomTokenCreateSerializer(TokenCreateSerializer):
    csrf_token = serializers.SerializerMethodField()

    def get_csrf_token(self, obj):
        # Get the CSRF token from the request
        request = self.context.get('request')
        csrf_token = None

        if request and hasattr(request, 'csrf_token'):
            csrf_token = str(request.csrf_token)

        return csrf_token

    def validate(self, attrs):
        data = super().validate(attrs)
        data['csrf_token'] = self.get_csrf_token(self)
        return data
