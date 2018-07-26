from django.urls import path

from . import views

app_name = 'article'
urlpatterns = [
    path('index/', views.index, name='index'),
    path('submit/', views.submit, name='submit'),
    path('review/', views.review, name='review'),
    path('create_article/', views.create_article, name='create_article')

    # path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    # path('<int:question_id>/vote/', views.vote, name='vote'),
]