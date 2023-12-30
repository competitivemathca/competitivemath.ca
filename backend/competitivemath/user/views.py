from django.http import JsonResponse
from .models import User
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.shortcuts import render

# from rest_framework.authentication import TokenAuthentication
# from authentication.serializers import CsrfExemptSessionAuthentication
# from rest_framework.decorators import authentication_classes, permission_classes
# from rest_framework.permissions import IsAuthenticated

# Create your views here
@csrf_exempt
def get_user_by_id(request):
    return None

@csrf_exempt
# @authentication_classes([CsrfExemptSessionAuthentication, TokenAuthentication])
# @permission_classes([IsAuthenticated])
def get_user_by_username(response):
    
    # Isn't POST request
    if response.method != "POST":
        return JsonResponse({"Error":"\"get_user_by_username\" requires POST request."}, content_type="application/json")
    
    username = response.POST.get("username")
    
    # No 'username' key in JSON
    if not username:
        return JsonResponse({"Error": "Missing 'username' parameter in the POST request."}, content_type="application/json")
    
    user_count = User.objects.filter(username=username).count()
    
    # No user with this username exists
    if user_count == 0:
        return JsonResponse({"Error":f"No user with username \"{username}\" exists."}, content_type="application/json")
    
    # More than one user is associated with the username
    elif user_count > 1:
        return JsonResponse({"Error":f"More than one user with username \"{username}\" exists. There should only be one user associated with a username."}, content_type="application/json")
    
    user = User.objects.get(username=username)
    user_profile_dict = user.get_user_profile_as_dict()
    
    return JsonResponse(user_profile_dict, content_type="application/json")