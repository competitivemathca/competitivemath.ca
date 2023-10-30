from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate
from user.models import User
import json

# Create your views here.
def login(response):
    
    if response.method == 'POST':
        
        data = json.loads(response.body)
        
        username = data.get('username')
        password = data.get('password')
        
        try:
            identify_user = User.objects.get(username)
            
        except User.DoesNotExist:
            return JsonResponse({'status':'unsuccessful', 'error_message':'No user with this username exists'})
        
        authenticate_user = authenticate(username=username, password=password)
            
        if authenticate_user is None:
            return JsonResponse({'status':'unsuccessful', 'error_message':'Invalid password'})
            