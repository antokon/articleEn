from boto.mturk.connection import Assignment
from django.shortcuts import render

from articleEn.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
from django.http import HttpResponse, Http404
from .models import Articles, Hits
from django.utils import timezone
from .get_results import check_res
import xmltodict, json, time, threading

import boto3

# import socket
# socket.getaddrinfo('localhost', 8080)


endpoint_url = 'https://mturk-requester-sandbox.us-east-1.amazonaws.com'
WAIT_SECONDS = 10


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
        # call db object article
        articles = Articles.objects.latest('pub_date')
        article_obj = articles.article
        highlight_obj = articles.highlight
        # print(article_obj)
        # print(highlight_obj)
        response_d = {}
        # Creating a HIT
        response = client.create_hit(
            Title='Data Collection',
            Description='Retrieve content based on the instruction',
            MaxAssignments=1,
            Keywords='tweets retrival, research',
            Reward='0.5',
            LifetimeInSeconds=10023,
            AssignmentDurationInSeconds=10023,
            HITLayoutId='34QB3MOAVUCN1QYC3XVXG7BPD93BRR',
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
        pub_date = timezone.now()
        # The response included several fields that will be helpful later
        hit_type_id = response['HIT']['HITTypeId']
        hit_id = response['HIT']['HITId']

        h = Hits(hitID=hit_id, pub_date=pub_date)
        h.save()
        #print(h)

        print("Your HIT has been created. You can see it at this link:")
        print("https://workersandbox.mturk.com/mturk/preview?groupId={}".format(hit_type_id))
        print("Your HIT ID is: {}".format(hit_id))

        response_d['result'] = str(hit_id)

        # Using timer to run the function of checking for results from the MTurk Worker
        check_res()
        return HttpResponse(json.dumps(response_d), content_type="application/json")
    else:
        raise Http404




#
# def check_results():
#     # print(time.ctime())
#     # threading.Timer(WAIT_SECONDS, check_results).start()
#
#     mturk = boto3.client('mturk',
#                          aws_access_key_id="AWS_ACCESS_KEY_ID",
#                          aws_secret_access_key="AWS_SECRET_ACCESS_KEY",
#                          region_name='us-east-1',
#                          endpoint_url=endpoint_url
#                          )
#     # Use the hit_id previously created saved in the db
#
#     # We are only publishing this task to one Worker
#     # So we will get back an array with one item if it has been completed
#     worker_results = mturk.list_assignments_for_hit(HITId=hit_id_old, AssignmentStatuses=['Submitted'])
#     # if hit_type:
#     #     params['HITTypeId'] = "32X1LLNITP7Q6I78V15JVRR1J9PD3X"
#
#     if worker_results['NumResults'] > 0:
#         for assignment in worker_results['Assignments']:
#             xml_doc = xmltodict.parse(assignment['Answer'])
#
#             print
#             "Worker's answer was:"
#             if type(xml_doc['QuestionFormAnswers']['Answer']) is list:
#                 # Multiple fields in HIT layout
#                 for answer_field in xml_doc['QuestionFormAnswers']['Answer']:
#                     print("For input field: " + answer_field['QuestionIdentifier'])
#                     print("Submitted answer: " + answer_field['FreeText'])
#
#             else:
#                 # One field found in HIT layout
#                 print("For input field: " + xml_doc['QuestionFormAnswers']['Answer']['QuestionIdentifier'])
#                 print("Submitted answer: " + xml_doc['QuestionFormAnswers']['Answer']['FreeText'])
#
#     else:
#         print("No results ready yet")
#
