import re
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from .models import Registration
from vaccinationsRegistration.models import Registration
from vaccinationsRegistration.serializers import RegistrationSerializer
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
import json
from django.core import serializers


# Create your views here.
@csrf_exempt
def register(request):
    content = request.POST.get('json1') #json1 is the name of the parameter were sending from the form 
    content = json.loads(content)
    serializer = RegistrationSerializer(data=content)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data)
    
    return JsonResponse(serializer.errors, status=400) #status=400 means an error has occured 

@csrf_exempt
def show(request):
    vaccineList = Registration.objects.all()
    created_json = serializers.serialize("json", vaccineList)
    data = {"json" : created_json}
    return JsonResponse(data)

@csrf_exempt
def home(request):
    return JsonResponse("")