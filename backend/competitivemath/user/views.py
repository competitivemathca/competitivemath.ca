from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import User

# Create your views here.
def get_user_by_username(username:str):
    user = get_object_or_404(User, username=username)
    
    user_profile_dict = user.get_user_profile_as_dict()
    
    return JsonResponse(user_profile_dict)