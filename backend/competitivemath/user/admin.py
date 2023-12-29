from django.contrib import admin

# Register your models here.

# Registers custom User model
# Note:
#   "." specifies relative import (i.e., within this directory)
#       Without "." you are accessing the top-level namespace (i.e., everything in competitivemath
#       django project)
from .models import User
admin.site.register(User)