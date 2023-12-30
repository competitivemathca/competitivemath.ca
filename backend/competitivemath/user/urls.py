from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('get_user_by_username', views.get_user_by_username, name='get_user_by_username')
]

from .views import CustomLoginView

urlpatterns += [
    # ... your other URLs
    path('auth/login/', CustomLoginView.as_view(), name='custom-login'),
]