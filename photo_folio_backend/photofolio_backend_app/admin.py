from django.contrib import admin
from .models import Continent, Country, City, Category, Photograph

# Register your models here.
admin.site.register(Continent)
admin.site.register(Country)
admin.site.register(City)
admin.site.register(Category)
admin.site.register(Photograph)
