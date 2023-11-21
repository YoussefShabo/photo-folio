from django.shortcuts import render
from rest_framework import viewsets
from .models import Photograph
from .serializers import PhotographSerializer

# Create your views here.


class PhotographViewSet(viewsets.ModelViewSet):
    queryset = Photograph.objects.all()
    serializer_class = PhotographSerializer

# ... viewsets for other models ...
