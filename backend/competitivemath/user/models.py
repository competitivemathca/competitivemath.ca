"""

Handles:
- Custom user model

"""

# UserManager documentation: https://docs.djangoproject.com/en/4.2/ref/contrib/auth/
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager

# Documentation: https://docs.djangoproject.com/en/4.2/topics/db/models/
from django.db import models
from django.utils import timezone


class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("You have not provided a valid email address")
        
        # All these methods and variables are from UserManager (excluding "email")
        email = self.normalize_email(email)
        
        # Creates instance of custom User model
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        # Return new model
        return user
    
    # Polymorphism of "create_user" method in UserManager class
    # Called when creating new user
    # E.g. do "create_user(email='example@example.com', password='password123', is_active=True, full_name='John Doe')"
    #      extra_fields = {'is_active': True, 'full_name': 'John Doe'}
    def create_user(self, email=None, password=None, **extra_fields):
        
        # If "is_staff" and "is_superuser" are not already keys in extra_fields, they will be set to False by default
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        
        # "**extra_fields" will spread out the key-value pairs as parameter-argument pairs into the _create_user method
        # E.g. extra_fields = {'is_active': True, 'full_name': 'John Doe'}
        #      return self._create_user(email='example@example.com', password='password123', is_active=True, full_name='John Doe')
        # _create_user has **extra_fields itself, so will catch **extra_fields passed here
        return self._create_user(email, password, **extra_fields)
    
    # Polymorphism of "create_superuser" method in UserManager class
    # Called when creating super users
    # "python manage.py createsuperuser" uses this method
    #   Each super user has fields based on parameters of this method (i.e. email + password)
    #       E.g. If you try to sign into admin dashboard on website, now only requires email + password
    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(email, password, **extra_fields)


# Custom "User" model
# Default "User" section in admin dashboard no longer appears
class User(AbstractBaseUser, PermissionsMixin):
    
    # Primary key: id = models.BigAutoField(primary_key=True)
    #   Can be found in "apps.py"
    
    # Username field for User
    #   max_length = 255: Maximum length of CharField
    #   blank = False: "username" field cannot be blank
    #   default = '': Default value for field
    #   unique = True: Each "username" field across all "User"s must be unique
    username = models.CharField(max_length=255, blank=False, default='', unique=True)
    
    # Email field for User
    email = models.EmailField(blank=False, default='', unique=True)
    
    # First and last name for User
    #   Only mandatory for "superusers"
    # first_name = models.CharField(max_length=255, blank=True, default='')
    # last_name = models.CharField(max_length=255, blank=True, default='')
    
    # Profile picture for User
    #   Database only stores path to image
    #   Actual image will be stored in cloud storage (Google Cloud Storage) as PNG or JPEG
    #       This is more efficient then storing base-64 encoded images in database
    # Figure out how they can send post request through json that contains image
    # Figure out how to create User object, and how receiving image from json post request and inserting image into this field and how to do this
    # Figure out how postgresql stores images in database like this
    # Figure out how to go from image stored in database, to accessing that image, and sending taht image through get request to frontend, in format convertable from how image stored in database to able to transport through json, and frontend able to use it
    # Also figure out how I can interact and User objects (i think using the .objects thing) and create methods to change user stuff and save to database
    # 
    profile_picture = models.TextField(blank=True)
    
    # Description for User
    #   Similar to DMOJ description
    #   Should support Latex, bold, italics, image upload, etc.
    description = models.TextField(blank=True, default='')
    
    
    # User's this User is following
    #   'followers' is the related_name to access a User's followers
    following = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='followers')
    
    
    # User's ranking amongst all Users in the website
    ranking = models.IntegerField(blank=True)
    
    # Specifies whether this User is currently active or not
    #   True -> User can log into system without restrictions
    #   False -> User has be deactivated or suspended, unable to log in and access system
    #               Common way to ban/suspend User
    is_active = models.BooleanField(default=True)
    
    # Specifies whether User is a Superuser
    #   True -> Superusers have access to Django admin interface
    #               Permission to create, read, update, and delete any type of model record
    #                   available in Django admin
    #               Highest level of access and authority in system
    is_superuser = models.BooleanField(default=False)
    
    # Specifies whether User is a Staffuser
    #   True -> Staffusers have access to Django admin intefrace
    #               Unless permission explicitly granted, cannot create, read, update, or delete
    #                   model records
    #               Not as much authority as superusers
    is_staff = models.BooleanField(default=False)
    
    # Date this User was created
    date_joined = models.DateTimeField(default=timezone.now)
    
    # Date this User last logged in
    last_login = models.DateTimeField(blank=True, null=True)
    
    
    # Polymorphism of "groups" field in PermissionsMixin
    # Defines many-to-many relationship between User and Group models
    groups = models.ManyToManyField(
        
        # Specifies model to define many-to-many relationship with 
        'auth.Group',
        
        # Indicates this field can be empty
        #   I.e. That it is possible for a User instance to not be related to any Group instances
        blank=True,
        
        # Specifies name of reverse relation, from Group model back to User model
        #   I.e. If instance of User is A, and instance of Group is B, and A.groups includes B,
        #           then I will also be able to access A in B.user_set
        related_name='custom_user_set'
    )
    
    # Polymorphism of "user_permissions" field in PermissionsMixin
    # Defines many-to-many relationship between User and Permission models
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='custom_user_set'
    )
    
    
    # Associated custom User model with CustomUserManager class for managing User instances
    objects = CustomUserManager()
    
    # Specifies name of field that acts as unique identifier for a user when they log in
    # Note:
    #   For "python manage.py createsuperuser" command in console, only the fields listed in 
    #       USERNAME_FIELD and REQUIRED_FIELDS are prompted
    # Djoser note:
    #   For djoser API requests, when there is input JSON of format "User.USERNAME_FIELD"
    #   it is referring to custom User model, and the USERNAME_FIELD attribute here. Thus, for
    #   this parameter in JSONs, we just put "username".
    USERNAME_FIELD = 'username'
    
    # Specifies name of field that represents email address of user
    # Used for authentication purposes
    EMAIL_FIELD = 'email'
    
    # Specifies list of fields that must be provided when creating new superuser via "python manage.py createsuperuser"
    # REQUIRED_FIELDS = ['email', 'first_name', 'last_name']
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        
    def get_full_name(self):
        return self.username;
    
    def get_short_name(self):
        return self.username or self.email.split('@')[0]
    
    def get_public_profile_as_dict(self):
        
        following = [i.username for i in self.following]
        followers = [i.username for i in self.followers.all()]
        
        user_profile_dict = {
            'username':self.username,
            'email':self.email,
            # 'first_name':self.first_name,
            # 'last_name':self.last_name,
            'profile_picture':self.profile_picture,
            'description':self.description,
            'following':following,
            'followers':followers,
            'date_joined':self.date_joined,
            'last_login':self.last_login,
            'is_active':self.is_active,
            'is_staff':self.is_staff,
            'is_superuser':self.is_superuser
        }
        
        return user_profile_dict