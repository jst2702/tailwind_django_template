from django.shortcuts import render

# Create your views here.
def home(requests):
    return render(requests, 'crm/index.html')

def signup(requests):
    return render(requests, 'crm/signup.html')

def pricing(requests):
    return render(requests, 'crm/pricing.html')

def product_model(requests):
    return render(requests, 'crm/product-modal.html')

def gallery(requests):
    return render(requests, 'crm/gallery.html')

def login(requests):
    return render(requests, 'crm/login.html')