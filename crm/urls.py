from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # URL pattern for the home view
    path('signup/', views.signup, name='signup'),
    path('pricing/', views.pricing, name='pricing'),
    path('modal/', views.product_model, name='modal'),
    path('gallery/', views.gallery, name='gallery'),
    path('login/', views.login, name='login'),

    # Clipboard urls
    path('clipboard/', views.clipboard, name='clipboard'),
    path('loopstudios/', views.loopstudios, name='loopstudios'),

]
