from django.shortcuts import render
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView  
from rest_framework import status




class RegisterView(APIView):
    def get(self, request):
        return Response({'message': 'Send a POST request to register a new user'})
    def post(self, request):
        serializer = Userserializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)