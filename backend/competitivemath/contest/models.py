import datetime
from django.db import models

# Create your models here.
class Contest(models.Model):
    
    # Contest format: DMOJ format
    #   There is a "LIVE" window, but each user only has "contest_length" amount of time to do the 
    #   contest
    #   E.g. Contest can have "LIVE" window of 3 days, but each user has only 3 hrs to do contest
    
    # Validating user's solution to a contest problem:
    #   To better simulate real math contests, the user will only know which of their solutions to 
    #   problems with numerical answers are correct after they have finished the contest.
    #   Of course, problems involving full solutions/proofs will only be checked a period of time 
    #   after the contest has taken place.
    
    # Contest standings: DMOJ format
    #   Standings (LIVE):
    #       Standings for when contest is LIVE.
    #       Will only be displayed to the users that have finished the contest.
    #       Live standings should be updated (while the contest is still LIVE) every time a 
    #       user finishes a contest.
    #       Immediately once a contest is no longer LIVE, changes to live standings should no longer 
    #       occur.
    #   Standings (TENTATIVE):
    #       Standings for when contest is no longer LIVE, but there are full solution/proof problems 
    #       still needing to be GRADED.
    #       If only problems with numerical answers, go straing to FINAL standings.
    #   Standings (FINAL):
    #       Standings for when contest is FINISHED.
    #       Available to all users on platform. (I.e. published.)
    #       Should be changed only in extreme circumestances, and changes must be made by hand by a 
    #       website admin.
    #   Note:
    #       Contests in which all problems have numerical answers:
    #           Immediately once contest is no longer LIVE, the live standings should be hidden,
    #           copied to the final standings, and the final standings should be published.
    #       Contests in which some problems have solutions that must be checked by a human:
    #           Immediately once contest is no longer LIVE, the live standings should be hidden,
    #           copied to tentative standings, and contest should be in GRADING process.
    #           Once all full solution/proof problems have been graded, the scores for all contestants
    #           should be inserted, and tentative standings reevaluated. Then, tentative standings 
    #           should be hidden, copied to final standings, and the final standings should be published.
    
    
    
    
    # Maximum length of the name of the contest
    TITLE_MAX_LEN = 50;
    
    
    
    
    # ---------- DRAFT CONTEST SETTINGS ---------- #
    # Name of contest
    contest_name = models.CharField(max_length=TITLE_MAX_LEN, blank=False, default='')
    
    # Whether the contest is available to the public
    public = models.BooleanField(default=True)
    
    # Contest must be public to be rated
    rated = models.BooleanField(default=False)
    
    # Clubs that authored the contest
    author_clubs = models.ManyToManyField('club.Club', blank=False)
    
    # Coordinators for contest
    contest_coordinators = models.ManyToManyField('user.User', blank=True)
    
    # Should just be all distinct authors across all Problems in Contest
    contest_authors = models.ManyToManyField('user.User', blank=True)
    
    # Should just be all distinct testers across all Problems in Contest
    contest_testers = models.ManyToManyField('user.User', blank=True)
    
    # The clubs competing in the contest
    # Only relevant for "public = False" contests
    #   If so, must contain minimum of one participating club
    participating_clubs = models.ManyToManyField('club.Club', blank=True)
    
    # Date and time in which contest becomes live
    contest_live_start_date_time = models.DateTimeField(blank=True)
    
    # Date and time in which contest is no longer live
    #   Must be after "contest_live_start_date_time"
    contest_live_end_date_time = models.DateTimeField(blank=True)
    
    # There will be no registration window, as it is redundant.
    # Users must be logged in, then they can click on a contest to compete in it
    # contest_registration_window_start_date_time = models.DateTimeField(blank=True)
    # contest_registration_window_end_date_time = models.DateTimeField(blank=True)
    
    # The maximum duration of time each user gets to complete the contest
    #   "maximum" because actual duration of time for each user = min(remaining time in which 
    #   contest is live, "contest_length")
    #   Must be at most the length of time between "contest_live_start_date_time" and 
    #   "contest_live_end_date_time"
    #   Units: Minutes
    contest_length = models.IntegerField(blank=True, default=150)
    
    # Rules for contest
    contest_rules = models.TextField(blank=True)
    
    # Contest contains at least one Problem with "solution_type = SolutionType.SHOW_WORK"
    contains_show_work_problem = models.BooleanField(default=False)

    # Whether contest is publishable or not
    # I.e., whether the values for all attributes above are valid
    publishable = models.BooleanField(default=False)
    # ---------- DRAFT CONTEST SETTINGS ---------- #
    
    
    
    # ---------- PRE APPROVAL CONTEST SETTINGS ---------- #
    # Whether contest is approved for being published by website admin
    approved = models.BooleanField(default=False)
    # ---------- PRE APPROVAL CONTEST SETTINGS ---------- #
    
    
    
    # ---------- PUBLISHED CONTEST SETTINGS ---------- #
    # ---------- PUBLISHED CONTEST SETTINGS ---------- #

    
    
    # ---------- LIVE CONTEST SETTINGS ---------- #
    # All users that have entered the contest and have seen problems
    contestants = models.ManyToManyField('user.User', blank=True, through='Contestant')

    # Live standings of contestants
    
    
    
    # I WANNA MAKE ARRAY OF USER OBJECTS AND SORT IT FOR LIKE STANDINGS AND STUFF BUT IDK IF THIS 
    # IS CORRECT WAY TO DO IT
    
    # ALSO WOULD I MAKE ANOTHER CLASS "CONTESTANT" OR SMTH TO STORE REFERENCE TO USER OBJECT AS WELL
    # AS THEIR SCORE?
    
    
    live_standings = models.ManyToManyField('user.User', blank=True)
    # ---------- LIVE CONTEST SETTINGS ---------- #
    
    
    
    # ---------- GRADING CONTEST SETTINGS ---------- #
    # Tentative standings for contestants
    #   I.e. Temporary standings while full answer/proof solutions are being graded
    #       If there are none, live standings should be directly copied to final standings
    tentative_standings = models.ManyToManyField('user.User', blank=True)
    # ---------- GRADING CONTEST SETTINGS ---------- #
    
    
    
    # ---------- FINISHED CONTEST SETTINGS ---------- #
    # Final standings for contestants
    final_standings = models.ManyToManyField('user.User', blank=True)
    # ---------- FINISHED CONTEST SETTINGS ---------- #
    
    
    
    
    # ---------- OTHER CONTEST SETTINGS ---------- #
    class ContestState(models.TextChoices):
        # DRAFT --> AWAITING_APPROVAL --> PUBLISHED --> LIVE --> GRADING --> FINISHED
        
        # Still in process of writing problems
        DRAFT = "DR"
        
        # Contest is ready, website admins must approve contest for publishing
        AWAITING_APPROVAL = "AP"
        
        # Contest is published, all users can see contest, and it is ready to go live
        PUBLISHED = "PU"
        
        # Contest is live, users can compete in the contest, live standings displayed
        LIVE = "LI"
        
        # Contest is no longer live, and user's solutions are being graded, tentative standings displayed
        GRADING = "GR"
        
        # Contest is completely finished, final standings displayed
        FINISHED = "FI"
    
    contest_state = models.CharField(max_length=2, choices=ContestState.choices, default=ContestState.DRAFT)
    # ---------- OTHER CONTEST SETTINGS ---------- #
    
    

# Contestant of a Contest
class Contestant(models.Model):
    
    # User associated with this Contestant
    user = models.ForeignKey('user.User', blank=False, related_name='contestant_instances')

    # Contest this Contestant was a part of
    contest = models.ForeignKey('contest.Contest', blank=False, related_name='contestant_instances')
    
    # Total score this Contestant received in the contest
    score = models.IntegerField(default=0)
    
    # The answer the Contestant gave to each Problem in the Contest
    contest_problem_answers = models.ManyToManyField('problem.Problem', blank=True, through='ContestProblemAnswer')
    
    
    
# A Contestant's answer to a Contest Problem
class ContestProblemAnswer(models.Model):
    
    # Contestant this ContestProblemAnswer is associated with (i.e. which contestant submitted this answer)
    contestant = models.ForeignKey('contest.Contestant', blank=False, related_name='contest_problem_answers')

    # The Contest Problem that this ContestProblemAnswer belongs to
    problem = models.ForeignKey('problem.Problem', blank=False, related_name='contest_problem_answers')
    
    # Numerical answer (if Problem.solution_type == 'NU')
    NU_answer = models.IntegerField(blank=True)
    
    # Multiple choice answer (if Problem.solution_type == 'MC')
    MC_answer = models.CharField(blank=True)
    
    # Text solution and/or image solution (if Problem.solution_type == 'SW')
    # I.e. For show work problems, user can submit both text or images to support their solution
    TXT_solution = models.TextField(blank=True)
    
    # related_name doc:
    # ContestProblemAnswer.IMG_solution.all() returns QuerySet of ImageSolution objects
    # ContestProblemAnswer.IMG_solution.all().order_by('created_at') returns
    
    

# An ImageSolution for one of the ContestProblemAnswer by the Contestant

# THIS ENTIRE CLASS IS FUCKED, IM DEALING WITH IMAGE SOLUTIONS LATER
class ImageSolution(models.Model):
    
    # Associated ContestProblemAnswer
    contest_problem_answer = models.ForeignKey('contest.ContestProblemAnswer', blank=False, related_name='IMG_solution')
    
    # Date and time this object was created
    
    # THIS DOESN'T WORK
    # FRONTEND NEEDS TO MAKE MULTIPLE SECTIONS TO UPLOAD SOLUTION PAGE 1, 2, 3, ...
    # THIS IS THE DATE AND TIME OBJECT IS CREATED, BUT I ASSUME ALL SOLUTION PAGES UPLOADED AT SAME TIME
    # TECHNICALLY COULD WORK, BUT TOO RISKY
    #   ORDER DELTAS REPRESENTING IMAGES PLACED IN JSON BASED ON WHICH USER UPLOADED FIRST
    #   THAT ORDER IS MAINTAINED WHEN SENDING JSON TO BACKEND
    #   ITERATE THROUGH DELTAS IN ORDER THEY WERE LISTED IN JSON
    #   CREATE INSTANCE OF THIS OBJECT IN THAT ORDER, SO STILL FIFO
    #   BUT VERY CRUDE AND RISKY
    date_time_uploaded = models.DateTimeField(auto_now_add=True)
    
    # ASSUMES IMAGES STORED IN DATABASE
    # FOR CLOUD STORAGE, SHOULD STORE URL TO THE IMAGE STORED IN CLOUD STORAGE INSTEAD
    image = models.ImageField(blank=True)