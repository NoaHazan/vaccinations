from django.db import models

# Create your models here.
#This class represents the columns we'll have in our table
class Registration(models.Model):
    #char field is checking the field.
    created=models.DateTimeField(auto_now_add=True)
    firstName=models.CharField(max_length=255)
    lastName=models.CharField(max_length=255)
    date=models.DateField()
    address=models.CharField(blank=True,max_length=255)
    city=models.CharField(blank=True,max_length=255)
    zipCode=models.CharField(blank=True,max_length=255)
    landLine=models.CharField(blank=True,max_length=255)
    cellularPhone=models.CharField(blank=True,max_length=255)
    covidInfections=models.BooleanField(default=False)
    Comorbidities=models.JSONField(blank=True)

    class Meta:
        ordering = ['created'] #will define the default order - starts with created, order from created


    

