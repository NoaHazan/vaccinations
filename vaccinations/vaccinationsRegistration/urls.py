
# urls.py
from django.urls import path
from django.conf.urls import include
from vaccinationsRegistration import views


urlpatterns = [
    path('register/', views.register),
    path('summary/', views.show),
    path('', views.home)
]


