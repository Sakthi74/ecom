from rest_framework import serializers
from .models import *
from product.serializers import productserializers

class CartItemsSerializer(serializers.ModelSerializer):
    product = productserializers(read_only=True)

    class Meta:
        model = CartItems
        fields = '__all__'
