from django.urls import path
from .views import weatherSunsetAPIView, recommendationView, FishMethodsView, FishMethodView, FishAreaView, FishAreasView, FishBaitView, FishBaitsView, FishEquipmentsView, FishEquipmentView

urlpatterns=[
    path('recommendation/', recommendationView.as_view(), name='recommendation'),
    path('weatherSunset/',weatherSunsetAPIView.as_view()),
    path('method/', FishMethodsView.as_view(), name='fish_method_list'),
    path('method/<int:pk>/', FishMethodView.as_view(), name='fish_method'),
    path('area/', FishAreasView.as_view(), name='fish_area_list'),
    path('area/<int:pk>/', FishAreaView.as_view(), name='fish_area'),
    path('bait/', FishBaitsView.as_view(), name='fish_bait_list'),
    path('bait/<int:pk>/', FishBaitView.as_view(), name='fish_bait'),
    path('equipment/', FishEquipmentsView.as_view(), name='fish_equipment_list'),
    path('equipment/<int:pk>/', FishEquipmentView.as_view(), name='fish_equipment'),
]