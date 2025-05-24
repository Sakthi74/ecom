from django.shortcuts import render
from django.http import JsonResponse
def new(request):
    return  JsonResponse('hii',safe= False)
