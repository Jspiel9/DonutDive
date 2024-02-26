from . import views
from django.urls import path

urlpatterns = [
    path("Home/", views.Home, name="Home"),
    path("Calendar/", views.Calendar, name="Calendar"),
    path("Contacts/", views.Contacts, name="Contacts"),
    path("Login/", views.Login, name="Login"),

]