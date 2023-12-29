from django.contrib import admin

# Register your models here.
from .models import Contest, Contestant, InContestSubmission, ImageSolution
admin.site.register(Contest)
admin.site.register(Contestant)
admin.site.register(InContestSubmission)


# from .models import ImageSolution
# admin.site.register(ImageSolution)