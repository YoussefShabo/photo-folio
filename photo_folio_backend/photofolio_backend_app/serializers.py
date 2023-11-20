from rest_framework import serializers
from .models import Continent, Country, City, Category, Photograph

class ContinentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Continent
        fields = '__all__'

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class PhotographSerializer(serializers.ModelSerializer):
    # If you want to display related fields as nested objects, use the respective serializers
    continent = ContinentSerializer(read_only=True)
    country = CountrySerializer(read_only=True)
    city = CitySerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Photograph
        fields = ['id', 'continent', 'country', 'city', 'category', 'date_taken', 'keywords', 'image']
        # If you don't want to show nested objects, you can simply use fields = '__all__'
