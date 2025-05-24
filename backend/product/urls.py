from django.urls import path
from .views import *

urlpatterns = [
    path('', ProductListCreateView.as_view()),  
    path("<int:pk>/",ProductRetriveUpdateDestroyView.as_view()),
]
    