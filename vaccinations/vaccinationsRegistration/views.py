import re
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from .models import Registration
from rest_framework.views import APIView
from vaccinationsRegistration.models import Registration
from vaccinationsRegistration.serializers import RegistrationSerializer
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
class RegisterViewSet(APIView):

    def get(self, request, format=None):
        snippets = Registration.objects.all()
        serializer = RegistrationSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        print("-----------in post method")
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)