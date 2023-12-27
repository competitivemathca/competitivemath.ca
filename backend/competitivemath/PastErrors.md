# ImportError: Could not import 'rest_framework_simplejwt.authentication.JWTAuthentication' for API setting 'DEFAULT_AUTHENTICATION_CLASSES'. ModuleNotFoundError: No module named 'pkg_resources'.
- `pip install setuptools`

# django.core.exceptions.AppRegistryNotReady: Apps aren't loaded yet.
- Add 
`import django`
`django.setup()`
to top of settings.py file. Rerun `python manage.py`. Then can remove.

# LookupError: No installed app with label 'admin'.
- Remove
`import django`
`django.setup()`
from top of settings.py file (added while trying to fix previous error).