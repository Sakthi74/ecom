from .views import RegisterView
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView,
)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path("login/",TokenObtainPairView.as_view(),name="token_obtain"),
    path("token/refresh",TokenRefreshView.as_view(),name="token_refresh"),
    path("logout/",TokenBlacklistView.as_view(),name="tokenblacklist"),
]