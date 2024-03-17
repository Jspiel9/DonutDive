# views.py

from django.db import IntegrityError
from django.conf import UserSettingsHolder
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse, HttpResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib import messages


def Home(request):
    context = {}
    return render(request, "Application/Home.html", context)

def Calendar(request):
    context = {}
    return render(request, "Application/Calendar.html", context)

def Contacts(request):
    context = {}
    return render(request, "Application/Contacts.html", context)

def Login(request):
    context = {}

    if request.method == "POST":
        username = request.POST['username']
        pass1 = request.POST['pass1']

        user = authenticate(username=username, password=pass1)

        if user is not None:
            login(request, user)
            fname = user.first_name
            return render(request, "Application/home.html", {'fname': fname})
        else:
            messages.error(request, "Bad Credentials!")
            return redirect('Home')

    return render(request, "Application/Login.html", context)

def Signup(request):
    if request.method == "POST":
        username = request.POST.get('username')
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        pass1 = request.POST.get('pass1')
        pass2 = request.POST.get('pass2')

        try:
            # Check if the username already exists
            if User.objects.filter(username=username).exists():
                messages.error(request, "Username already exists. Please choose a different username.")
                return redirect('Signup')

            # Create the user if the username is unique
            myuser = User.objects.create_user(username, email, pass1)
            myuser.first_name = fname
            myuser.last_name = lname
            myuser.save()

            messages.success(request, "Sign up successful")
            return redirect('Login')
        
        except IntegrityError:
            # Handle integrity error (e.g., database constraint violation)
            messages.error(request, "An error occurred during sign up. Please try again.")
            return redirect('Signup')

    return render(request, "Application/Signup.html", {})

def Logout(request):
    context = {}
    logout(request)
    messages.success(request, "Logged Out Successfully")
    return redirect('Home')
    

def check_authentication(request):
    if request.user.is_authenticated:
        return JsonResponse({'message': 'User is authenticated', 'username': request.user.username})
    else:
        return JsonResponse({'message': 'User is not authenticated'})

