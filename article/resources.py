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

    # def post(self):
    #   my_response = {'ajax_resp': 'Hello, webapp World!'}
    #   datos = json.dumps(my_response)
    #
    #   self.response.headers.add_header('content-type', 'application/json', charset='utf-8')
    #   self.response.out.write(datos)
    # def post(self):
    #     """
    #     Implementation of the addition of a new user to the database via POST HTTP request.
    #     HTTP status codes:
    #         201 - the new user has been created correctly.
    #         400 - some required fields are missing from the request body
    #         409 - the user nickname is already taken
    #         415 - the Content-Type of the request is not JSON
    #         500 - database error
    #     :return: flask.Response of the response body and status code.
    #     """
    #     if JSON != request.headers.get(CONTENT_TYPE):
    #         return NOT_JSON_RESP
    #     request_body = request.get_json(force=True)
    #
    #     # pick up nickname to check for conflicts
    #     try:
    #         nickname = request_body["nickname"]
    #         email = request_body["email"]
    #     except KeyError:
    #         return create_error_response(400, 'Missing fields', 'Be sure to include nickname and email')
    #
    #     # Conflict if user already exist
    #     if g.con.get_user(nickname):
    #         return existing_nickname_response(nickname)
    #
    #     nickname = g.con.append_user(nickname, email)
    #     if not nickname:
    #         return DB_PROBLEM_RESP
    #
    #     # CREATE RESPONSE AND RENDER
    #     return render(status=201, headers={"Location": api.url_for(User, nickname=nickname)})

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
