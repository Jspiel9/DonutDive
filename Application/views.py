from django.shortcuts import render

# Create your views here.
def home(request):
    context={}
    return render(request, "Application/home.html", context)

def index(request):
    context={}
    return render(request, "Application/index.html", context)
    