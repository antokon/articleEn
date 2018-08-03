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



# class Tweets(models.Model):
#     article = Articles.ForeignKey()
#     tweets = models.TextField()
#
#     objects = models.Manager()
#
#     def __str__(self):
#         return "Tweet: %s" % (self.tweets)

    # def article_details(self):
    #     return "%s %s %s" % (self.highlight, self.tweets, self.references)
    #     # return self.highlight + " " + "Number of Tweets" + self.tweets.value_to_string \
    #     #         + " " + "Number of References" + self.references.value_to_string

