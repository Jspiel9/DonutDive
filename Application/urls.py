# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path("Home/", views.Home, name="Home"),
    path("Calendar/", views.Calendar, name="Calendar"),
    path("Contacts/", views.Contacts, name="Contacts"),
    path("Login/", views.Login, name="Login"),
    path("login/", views.login_view, name="login"),  # Update to point to login_view function
    path("checkAuth/", views.check_authentication, name="check_auth"),
]
