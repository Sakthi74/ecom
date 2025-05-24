from django.shortcuts import render
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView  



class RegisterView(APIView):
    def post(self, request):
        serializer = Userserializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
