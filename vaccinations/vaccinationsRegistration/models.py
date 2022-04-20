from django.db import models

# Create your models here.

class Registration(models.Model):
    #char field is checking the field.
    firstName= models.CharField(max_length=255)
    lastName=models.CharField(max_length=255)
    date=models.CharField(max_length=20)
    address=models.CharField(max_length=255)
    city=models.CharField(max_length=15000)
    zipCode=models.IntegerField()
    landLine=models.CharField(max_length=20)
    cellularPhone=models.CharField(max_length=20)
    covidInfections=models.CharField(blank=True, max_length=255)
    Comorbidities=models.CharField(blank=True, max_length=255)


    

