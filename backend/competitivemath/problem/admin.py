from django.contrib import admin

# Register your models here.
from .models import Problem, Tag
admin.site.register(Problem)
admin.site.register(Tag)