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



# class Highlights(models.Model):
#     article = models.ForeignKey(Articles, on_delete=models.CASCADE)
#
#     objects = models.Manager()
#
#     def __str__(self):
#         return "Highlight: %s, No of Tweets: %s, No of Refences: %s" % (self.highlight, self.tweets, self.references)

    # def article_details(self):
    #     return "%s %s %s" % (self.highlight, self.tweets, self.references)
    #     # return self.highlight + " " + "Number of Tweets" + self.tweets.value_to_string \
    #     #         + " " + "Number of References" + self.references.value_to_string

