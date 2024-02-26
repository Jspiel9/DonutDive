# views.py

from django.contrib.auth import authenticate, login
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)
    elif request.method == 'OPTIONS':
        return HttpResponse(status=200)

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
    return render(request, "Application/Login.html", context)

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)
    elif request.method == 'OPTIONS':
        response = JsonResponse({'message': 'CORS preflight request successful'})
        response['Access-Control-Allow-Origin'] = '*' 
        response['Access-Control-Allow-Methods'] = 'POST, OPTIONS' 
        response['Access-Control-Allow-Headers'] = 'Content-Type' 
        return response

def check_authentication(request):
    if request.user.is_authenticated:
        return JsonResponse({'message': 'User is authenticated', 'username': request.user.username})
    else:
        return JsonResponse({'message': 'User is not authenticated'}, status=401)
