from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('<str:username>', views.get_user_by_username, name='get_user_by_username')
]