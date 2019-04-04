import datetime

from django.db import models
from django.utils import timezone


class Articles(models.Model):
    article = models.TextField()
    highlight = models.TextField()
    pub_date = models.DateTimeField('date published')

    objects = models.Manager()

    def __str__(self):
        return "Article: %s, Highlight: %s" % (self.article, self.highlight)

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now

#Creates model (database table for tweets)


class Tweet(models.Model):

    tweet_link = models.TextField()
    pub_date = models.DateTimeField('date published')


    def __str__(self):
        return self.tweet_link



class Hits(models.Model):
    hitID = models.TextField()
    pub_date = models.DateTimeField('date published')

    objects = models.Manager()

    def __str__(self):
        return "hit ID: %s" % self.hitID

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now


class Answer(models.Model):
    result = models.TextField()
    pub_date = models.DateTimeField('date published')
    article = models.ForeignKey(Articles, on_delete=models.CASCADE)
    objects = models.Manager()

    def __str__(self):
        return "Response is %s" % self.result

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now
