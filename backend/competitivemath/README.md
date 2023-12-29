# API Endpoints for User Account, JWT Token, and Password stuff

## Create user account:

- POST request to "http://localhost:8000/auth/users/", pass in JSON format

```json
{
  "email": "andarw2006@gmail.com",
  "username": "alhod",
  "password": "123password123",
  "re_password": "123password123"
}
```

- If unsuccessful, these are possible JSONs frontend receives:

```json
{
    "email": [
        "User with this email already exists."
    ],
    "username": [
        "User with this username already exists."
    ]
}
{
    "non_field_errors": [
        "The two password fields didn't match."
    ]
}
{
    "password": [
        "The password is too similar to the username.",
        "This password is too short. It must contain at least 8 characters.",
        "This password is too common.",
        "This password is entirely numeric."
    ]
}
```

- If successful, frontend will receive JSON similar to following:

```json
{
  "email": "bndarw2006@gmail.com",
  "first_name": "",
  "last_name": "",
  "username": "blhod",
  "id": 2
}
```

- Note user account has been created, but isn't yet active ("is_active" field for user should be false)
- Sends an email from "EMAIL_HOST_USER" to "email" with confirmation link that looks like this:

```
"You're receiving this email because you need to finish activation process on localhost:8000.

Please go to the following page to activate account:

http://localhost:8000/activate/Mg/bwwap0-39ab960cc109d9d7962590fb40da0496

Thanks for using our site!

The localhost:8000 team"

```

- Make link redirect to frontend page (probably just home page) and send request to activate user account as below.
- **Still need to figure out how to resend activate account email.**

## Activate user account:

- POST request to "http://localhost:8000/auth/users/activation/", pass in JSON format
  {
  "uid": "MQ",
  "token": "bwh1bf-b39a82bc53adc47d6cd200d97cdc209b"
  }
- Note the "uid" and "token" can be found in the url of the confirmation link emailed to the user
- If successful, empty JSON is returned
- If unsuccessful, this JSON is returned:

```json
{
  "token": ["Invalid token for given user."]
}
```

## Login to user account (i.e. get JWT token):

- POST request to "http://localhost:8000/auth/jwt/create/", pass in JSON format:

```json
{
  "username": "blhod",
  "password": "1234password1234"
}
```

- If successful, JSON response:

```json
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5ODExMTI3OCwiaWF0IjoxNjk4MDI0ODc4LCJqdGkiOiI4OTVkZDE3NjJjNDc0MzNlOWM1ZDg5NWIzZDM0NjlkMCIsInVzZXJfaWQiOjJ9.WIDxI88H8Tq5_eXtjISrQ6xWD-1qlDyqEmBvR4l9LKQ",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDI1MTc4LCJpYXQiOjE2OTgwMjQ4NzgsImp0aSI6IjQ4M2I3ODgzYzY3ZDQ2NWE5NDM1N2Q1M2E3N2QwMTczIiwidXNlcl9pZCI6Mn0.bD3OJcGxAyvjoZWE-xSvbdpgeL4jlG2A6D7u2qchRqc"
}
```

- If unsuccessful, possible JSON responses:

```json
{
  "detail": "No active account found with the given credentials"
}
```

(_doesn't differentiate between whether username doesn't exist or password is incorrect_)

- There is no actual like constant information being held in backend about if user is logged in or not, or who is logged in (e.g. a boolean variable "is_logged_in"). Just whenever send POST requests to backend, include the token in the JSON, as backend uses some process to verify if user is logged in.

## Refresh JWT token (get new JWT token because session soon to end):

- POST request to "http://localhost:8000/auth/jwt/refresh/", pass in JSON format:

```json
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5ODc5MDU5MiwiaWF0IjoxNjk4NzA0MTkyLCJqdGkiOiIxNDE0ZjUwN2MyYWU0NGVhYTdkZTZkNWY4NDAzYmM0YyIsInVzZXJfaWQiOjJ9.aZrlWaW34prPDBrjlGSWs58ywLl5stkdWMjJ-WdmkQQ"
}
```

- If successful, JSON response:

```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NzA0NTIwLCJpYXQiOjE2OTg3MDQxOTIsImp0aSI6IjI5MTkzYTAzODhjMDRlY2FhMzE1MTJjOTYxMTYyYzNiIiwidXNlcl9pZCI6Mn0.fb3YcF3hV5rgTQhRKsh0KCefdNibPClO7XuBb7WpmCA"
}
```

- If unsuccessful, JSON response:

```json
{
  "detail": "Token is invalid or expired",
  "code": "token_not_valid"
}
```

## Reset password (declare user wants to reset password):

- POST request to "http://localhost:8000/auth/users/reset_password/", pass in JSON format

```json
{
  "email": "bndarw2006@gmail.com"
}
```

- There will be an email sent with link containing "user_id"/"token" (not JWT token, separate token for reset password) like this:

```
"You're receiving this email because you requested a password reset for your user account at localhost:8000.

Please go to the following page and choose a new password:

http://localhost:8000/password/reset/confirmation/Mg/bwwasq-35cd5a699dfe3e18946f8e33e51b9408
Your username, in case you've forgotten: blhod

Thanks for using our site!

The localhost:8000 team"
```

- Make it so the link redirects to a frontend page where user can insert new password and stuff.
- Successful/unsuccessful, empty JSON response
- **Still need to figure out how to resend reset password confirmation email**

## Reset password (actually reset the password):

- POST request to "http://localhost:8000/auth/users/reset_password_confirm/", pass in JSON format:

```json
{
  "uid": "Mg",
  "token": "bwwasq-35cd5a699dfe3e18946f8e33e51b9408",
  "new_password": "1234password1234",
  "re_new_password": "1234password1234"
}
```

- If successful: empty JSON response
- If unsuccessful, possible JSON responses:

```json
{
    "uid": [
        "Invalid user id or user doesn't exist."
    ]
}
{
    "token": [
        "Invalid token for given user."
    ]
}

```

- Note after password is successfully reset, token automatically becomes invalid
- **For some reason Djoser isn't checking whether "new_password" is the same as "re_new_password", but as long as "uid" and "token" are correct, will reset password. New password becomes value at "new_password"** Gotta figure this out.
