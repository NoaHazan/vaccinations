import re
from django.shortcuts import render
from django.http import HttpResponse

from .models import Registration
from vaccinationsRegistration.models import Registration
from vaccinationsRegistration.serializers import RegistrationSerializer
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.

def register(request):
    print(request.body)
    #print(type(request.body))
    #resu = request.body.decode("utf-8") 
    #print("resu -------")
    print("request type is: ", type(request))
    print(type(request.body))
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    print(body_data)
    serializer = RegistrationSerializer(data=request.body)
    serializer.is_valid()
    if RegistrationSerializer.is_valid():
        print("is valid")
        res = RegistrationSerializer.save()
        print(res)
    print(RegistrationSerializer.errors)
    return HttpResponse(request)