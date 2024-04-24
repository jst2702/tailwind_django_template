from django.shortcuts import render

# Create your views here.
def home(requests):
    return render(requests, 'crm/index.html')

def signup(requests):
    return render(requests, 'crm/signup.html')