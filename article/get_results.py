from xml.sax import parseString

import boto3
import xmltodict
from django.http import request

from articleEn.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_HOST
from article.utils import hit_id_old

endpoint_url = 'https://mturk-requester-sandbox.us-east-1.amazonaws.com'

mturk = boto3.client('mturk',
                     aws_access_key_id="AWS_ACCESS_KEY_ID",
                     aws_secret_access_key="AWS_SECRET_ACCESS_KEY",
                     region_name='us-east-1',
                     endpoint_url=endpoint_url
                     )
# You will need the following library
# to help parse the XML answers supplied from MTurk
# Install it in your local environment with

# Use the hit_id previously created
hit_id = request.session['hit_id']
# We are only publishing this task to one Worker
# So we will get back an array with one item if it has been completed
worker_results = mturk.list_assignments_for_hit(HITId=hit_id, AssignmentStatuses=['Submitted'])
if worker_results['NumResults'] > 0:
    for assignment in worker_results['Assignments']:
        xml_doc = xmltodict.parse(assignment['Answer'])

        print
        "Worker's answer was:"
        if type(xml_doc['QuestionFormAnswers']['Answer']) is list:
            # Multiple fields in HIT layout
            for answer_field in xml_doc['QuestionFormAnswers']['Answer']:
                print("For input field: " + answer_field['QuestionIdentifier'])
                print("Submitted answer: " + answer_field['FreeText'])

        else:
            # One field found in HIT layout
            print("For input field: " + xml_doc['QuestionFormAnswers']['Answer']['QuestionIdentifier'])
            print("Submitted answer: " + xml_doc['QuestionFormAnswers']['Answer']['FreeText'])

else:
    print("No results ready yet")



#second method
client = boto3.client(
    service_name='mturk',
    region_name='us-east-1',
    endpoint_url=endpoint_url,
)
hit = client.get_hit(HITId=hit_id)
print('Hit {} status: {}'.format(hit_id, hit['HIT']['HITStatus']))
response = client.list_assignments_for_hit(
    HITId=hit_id,
    AssignmentStatuses=['Submitted', 'Approved'],
    MaxResults=10,
)
assignments = response['Assignments']
print('The number of submitted assignments is {}'.format(len(assignments)))
for assignment in assignments:
    worker_id = assignment['WorkerId']
    assignment_id = assignment['AssignmentId']
    answer_xml = parseString(assignment['Answer'])
    # the answer is an xml document. we pull out the value of the first
    # //QuestionFormAnswers/Answer/FreeText
    answer = answer_xml.getElementsByTagName('FreeText')[0]
    # See https://stackoverflow.com/questions/317413
    only_answer = " ".join(t.nodeValue for t in answer.childNodes if t.nodeType == t.TEXT_NODE)

    print('The Worker with ID {} submitted assignment {} and gave the answer "{}"'.format(worker_id, assignment_id,
                                                                                          only_answer))

    # Approve the Assignment (if it hasn't already been approved)
    if assignment['AssignmentStatus'] == 'Submitted':
        print('Approving Assignment {}'.format(assignment_id))

        client.approve_assignment(
            AssignmentId=assignment_id,
            RequesterFeedback='good',
            OverrideRejection=False,
        )
