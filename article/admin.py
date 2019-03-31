from django.contrib import admin
from django.urls import include, path
from .models import Articles
from .models import Tweet


urlpatterns = [
    path('article/', include('article.urls')),
    path('admin/', admin.site.urls),
]

admin.site.register(Articles)
admin.site.register(Tweet)
