from django.contrib import admin
from django.urls import include, path
from .models import Articles, Tweet, Hits, Answer


urlpatterns = [
    path('article/', include('article.urls')),
    path('admin/', admin.site.urls),
]

admin.site.register(Articles)
admin.site.register(Tweet)
admin.site.register(Hits)
admin.site.register(Answer)

