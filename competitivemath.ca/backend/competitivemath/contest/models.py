from django.db import models

# Create your models here.
class Contest:
    
    TITLE_MAX_LEN = 50;
    
    contest_name = models.CharField(max_length=TITLE_MAX_LEN, blank=False, default='')
    
    public = models.BooleanField(default=True)
    
    # Contest must be public to be rated
    rated = models.BooleanField(default=False)
    
    author_clubs = models.ManyToManyField('club.Club', blank=False)
    
    contest_coordinators = models.ManyToManyField('user.User', blank=True)
    
    # Should just be all authors across all Problems in Contest
    contest_authors = models.ManyToManyField('user.User', blank=True)
    
    contest_testers = models.ManyToManyField('user.User', blank=True)
    
    participating_clubs = models.ManyToManyField('club.Club', blank=True)
    
    contest_entry_window_start_date_time = models.DateTimeField(blank=True)
    
    contest_entry_window_end_date_time = models.DateTimeField(blank=True)
    
    contest_registration_window_start_date_time = models.DateTimeField(blank=True)
    
    contest_registration_window_end_date_time = models.DateTimeField(blank=True)
    
    contest_length = models.IntegerField(blank=True, default=150)
    
    contest_rules = models.TextField(blank=True)
    
    publishable = models.BooleanField(default=False)
    
    registered_users = models.ManyToManyField(blank=True)
    
    class ContestState(models.TextChoices):
        # DRAFT --> AWAITING_APPROVAL --> PUBLISHED --> REGISTRATION_WINDOW --> ENTRY_WINDOW --> FINISHED
        
        # Still in process of writing problems
        DRAFT = "DR"
        AWAITING_APPROVAL = "AP"
        PUBLISHED = "PU"
        REGISTRATION_WINDOW = "RW"
        ENTRY_WINDOW = "EW"
        FINISHED = "FI"
    
    contest_state = models.CharField(max_length=2, choices=ContestState.choices, default=ContestState.DRAFT)
    
    