from rest_framework import serializers
from .models import*

class productserializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields= '__all__'