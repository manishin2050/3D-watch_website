from django.contrib import admin
from django.urls import path,re_path,include
# from django.conf.urls import url
from djangowatch import views

urlpatterns = [
    re_path(r'^watch$',views.studentApi),
    re_path(r'^watch$',views.studentApi),
    re_path(r'^watch/([0-9]+)$',views.studentApi),
    path("api/v1/auth/", include('djoser.urls')),
    path("api/v1/auth/", include('djoser.urls.jwt')),
    path('admin/', admin.site.urls),
]