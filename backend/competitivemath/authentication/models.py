from django.db import models

# Create your models here.
from rest_framework.authentication import SessionAuthentication, TokenAuthentication

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening