from django.shortcuts import render
from rest_framework import generics
from .models import *
from .Serializers import *

class CartListCreateView(generics.ListCreateAPIView):
    queryset = CartItems.objects.all()
    serializer_class = CartItemsSerializer

class CartItemDeleteView(generics.DestroyAPIView):
    queryset = CartItems.objects.all()
    serializer_class = CartItemsSerializer
