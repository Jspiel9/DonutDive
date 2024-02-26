from django.shortcuts import render

# Create your views here.
def Home(request):
    context={}
    return render(request, "Application/Home.html", context)

def Calendar(request):
    context={}
    return render(request, "Application/Calendar.html", context)

def Contacts(request):
    context={}
    return render(request, "Application/Contacts.html", context)

def Login(request):
    context={}
    return render(request, "Application/Login.html", context)
    