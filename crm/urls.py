from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # URL pattern for the home view
    path('signup/', views.signup, name='signup'),  # URL pattern for the signup view
]
