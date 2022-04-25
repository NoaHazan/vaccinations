from atexit import register
from . import views
# urls.py
from django.urls import path
from django.conf.urls import include
from .views import RegisterViewSet
from vaccinationsRegistration import views


urlpatterns = [
    path('register/', views.register),
    path('summary/', views.show)
]
