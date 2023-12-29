from django.db import models
from django.utils import timezone

# Create your models here.
class Problem(models.Model):
    
    
    
    # Maximum length of a problem's name
    PROBLEM_NAME_MAX_LEN = 50
    
    
    
    
    
    # ---------- PRE CONTEST PROBLEM SETTINGS ---------- #
    # * All problem settings must be filled out and valid for problem to be published
    problem_name = models.CharField(max_length=PROBLEM_NAME_MAX_LEN, blank=False, default='')
    
    # The Problem itself
    problem = models.TextField(blank=True)
    
    # Correct numerical solution
    NU_solution = models.IntegerField(blank=True)
    
    # Contest this problem belongs to
    # PROBLEM SETTING UI ONLY AVAILABLE IN CONTEST CREATION UI
    contest = models.ForeignKey('contest.Contest', blank=False, related_name='contest_problems')
    
    # Score contestant gets from correct submission
    correct_score = models.IntegerField(blank=True)
    
    # Score contestant gets from not submitting any answer
    empty_score = models.IntegerField(blank=True)
    
    # Score contestant gets from submitting incorrect answer
    incorrect_score = models.IntegerField(blank=True)
    
    # Editorial for the problem
    editorial = models.TextField(blank=True)
    
    # # Date-time this Problem was created
    # date_time_created = models.DateTimeField(default=timezone.now)
    
    # Can be no tags
    tags = models.ManyToManyField('problem.Tag', blank=True, related_name='problems_with_this_tag')
    
    
    ## ---------- PRE CONTEST ROLES ---------- ##
    
    # The authors for a problem must be manually inputted by the owner of the club
    authors = models.ManyToManyField('user.User', blank=False, related_name='owner_of_these_problems')
    # owner = models.ForeignKey('user.User', blank=False, related_name='owner_of_these_problems')
    
    # editors = models.ManyToManyField('user.User', blank=True, related_name='editor_of_these_problems')
    
    # viewers = models.ManyToManyField('user.User', blank=True, related_name='viewer_of_these_problems')
    ## ---------- PRE CONTEST ROLES ---------- ##
    
    
    ## ---------- POST CONTEST ROLES ---------- ##
    # authors = models.ManyToManyField('user.User', blank=False, default=owner, related_name='author_of_these_problems')
    ## ---------- POST CONTEST ROLES ---------- ##
    
    
    # Whether Problem is publishable or not
    #   i.e. Whether all above attributes are filled out validly
    publishable = models.BooleanField(default=False)
    # ---------- PRE CONTEST PROBLEM SETTINGS ---------- #
    
    
    
    
    
    
    
    # ---------- POST CONTEST PROBLEM SETTINGS ---------- #
    # Rating for problem generated after contest has taken place
    rating = models.IntegerField(blank=True)
    
    # Must explicitly set this attribute after contest has gone live
    date_time_live = models.DateTimeField(blank=True)
    # ---------- POST CONTEST PROBLEM SETTINGS ---------- #
    
    
    
    class SolutionType(models.TextChoices):
        
        
        # ONLY IMPLEMENT NUMERICAL SOLUTIONS FOR NOW
        NUMERICAL = "NU"
        # MULTIPLE_CHOICE = "MC"
        # SHOW_WORK = "SW"
    
    solution_type = models.CharField(max_length=2, choices=SolutionType.choices, default=SolutionType.NUMERICAL)
    
    

# Tags for problems
class Tag(models.Model):
    
    TAG_MAX_LEN = 50
    
    tag_name = models.CharField(max_length=TAG_MAX_LEN, blank=False)