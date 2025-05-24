from rest_framework import serializers
from .models import*

class productserializers(serializers.ModelSerializer):
    class Meta:
        model = product
        fields= '__all__'