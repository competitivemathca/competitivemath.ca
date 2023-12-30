from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'username', 'password')
        
        
# # serializers.py
# from rest_framework.authentication import SessionAuthentication, TokenAuthentication

# class CsrfExemptSessionAuthentication(SessionAuthentication):

#     def enforce_csrf(self, request):
#         return  # To not perform the CSRF check previously happening