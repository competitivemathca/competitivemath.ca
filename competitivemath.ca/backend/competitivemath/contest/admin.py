from django.contrib import admin

# Register your models here.
from .models import Contest, Contestant, ContestProblemAnswer, ImageSolution
admin.site.register(Contest)
admin.site.register(Contestant)
admin.site.register(ContestProblemAnswer)
admin.site.register(ImageSolution)