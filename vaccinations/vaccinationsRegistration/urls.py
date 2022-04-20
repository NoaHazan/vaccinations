from atexit import register
from . import views
# urls.py
from django.urls import path
from django.conf.urls import include
from .views import RegisterViewSet


urlpatterns = [
    path('', RegisterViewSet.as_view()),
]
