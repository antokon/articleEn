from django.contrib import admin
from django.urls import include, path
from .models import Articles

urlpatterns = [
    path('article/', include('article.urls')),
    path('admin/', admin.site.urls),
]

admin.site.register(Articles)

