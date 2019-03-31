# article/resources.py
from tastypie import serializers
from django.core.serializers import json
from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from article.models import Articles
import json
from django.http import HttpResponse


class ArticlesResource(ModelResource):
    class Meta:
        queryset = Articles.objects.all()
        resource_name = 'articles'
        fields = ['id', 'article', 'highlight', 'pub_date']
        filtering = {
            'article': ['icontains'],
            'highlight': ['icontains'],
            'pub_date': ['icontains']
        }
        authorization = Authorization()


# class HighlightsResource(ModelResource):
#
#     class Meta:
#         queryset = Highlights.objects.all()
#         resource_name = 'highlights'
#         fields = ['article', 'highlight', 'id', 'tweets', 'references']
#         filtering = {
#             'highlight': ['icontains']
#         }
#         authorization = Authorization()
