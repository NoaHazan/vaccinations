from rest_framework.serializers import ModelSerializer

from vaccinationsRegistration.models import Registration

class RegistrationSerializer(ModelSerializer):
    class Meta:
        model = Registration
        fields = ('firstName', 'lastName', 'date', 'address', 'city', 'zipCode', 'landLine', 'cellularPhone', 'covidInfections','Comorbidities')
