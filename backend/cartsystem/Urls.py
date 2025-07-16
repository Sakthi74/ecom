from django.urls import path
from .views import *

urlpatterns = [
    path('new', CartListCreateView.as_view()),
    path('<int:pk>/', CartItemDeleteView.as_view()),
]
