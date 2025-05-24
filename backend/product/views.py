from django.shortcuts import render
from .models import*
from .serializers import*
from rest_framework import generics

class ProductListCreateView( generics.ListCreateAPIView):
    queryset=product.objects.all()
    serializer_class=productserializers
class ProductRetriveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset=product.objects.all()
    serializer_class=productserializers
    Lookup_field = 'pk'
    

