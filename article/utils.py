from django.shortcuts import render

from articleEn.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_HOST
from django.http import HttpResponse, Http404
from .models import Articles

import json

import boto3
# import socket
# socket.getaddrinfo('localhost', 8080)


endpoint_url = 'https://mturk-requester-sandbox.us-east-1.amazonaws.com'


def conn_mturk(request):
    if request.method == 'POST':
        # https://workersandbox.mturk.com/mturk/externalSubmit
        region_name = 'us-east-1'
        client = boto3.client(
            'mturk',
            endpoint_url=endpoint_url,
            region_name=region_name,
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
        )

        # This will return $10,000.00 in the MTurk Developer Sandbox
        print("You have a balance of: " + client.get_account_balance()['AvailableBalance'])

        # required to use POST so each entry goes only once in the MTurk
        articles = Articles.objects.latest('pub_date')
        article_obj = articles.article
        highlight_obj = articles.highlight
        print(article_obj)
        print(highlight_obj)

        #Creating a HIT
        response = client.create_hit(
            Title='Data Collection',
            Description='Retrieve content based on the instruction',
            MaxAssignments=1,
            Keywords='tweets retrival, research',
            Reward='0.5',
            LifetimeInSeconds=10023,
            AssignmentDurationInSeconds=10023,
            HITLayoutId='31IM6AW7K7QO9VJXFIBRUWY13KB66Y',
            HITLayoutParameters=[
                {
                    'Name': 'article',
                    'Value': article_obj,
                },
                {
                    'Name': 'name',
                    'Value': highlight_obj,
                },
            ]
        )
        # The response included several fields that will be helpful later
        hit_type_id = response['HIT']['HITTypeId']
        hit_id = response['HIT']['HITId']
        request.session['hit_id'] = hit_id
        print("Your HIT has been created. You can see it at this link:")
        print("https://workersandbox.mturk.com/mturk/preview?groupId={}".format(hit_type_id))
        print("Your HIT ID is: {}".format(hit_id))

        return render(request, hit_id_old)
    else:
        raise Http404
