from xml.sax import parseString
from articleEn.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
from .models import Answer, Hits, Articles
from django.utils import timezone
import boto3
import xmltodict, time, threading

endpoint_url = 'https://mturk-requester-sandbox.us-east-1.amazonaws.com'

# second method
pub_date = timezone.now()
WAIT_SECONDS = 10


def check_res():
    mturk = boto3.client('mturk',
                         aws_access_key_id=AWS_ACCESS_KEY_ID,
                         aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
                         region_name='us-east-1',
                         endpoint_url=endpoint_url
                         )
    hit = Hits.objects.latest('pub_date')
    hitid = hit.hitID

    hit_id = hitid
    hit = mturk.get_hit(HITId=hit_id)
    print('Hit {} status: {}'.format(hit_id, hit['HIT']['HITStatus']))
    response = mturk.list_assignments_for_hit(
        HITId=hit_id,
        AssignmentStatuses=['Submitted', 'Approved'],
        MaxResults=10,
    )
    assignments = response['Assignments']
    print(len(assignments))
    print('The number of submitted assignments is {}'.format(len(assignments)))
    if len(assignments) > 0:
        for assignment in assignments:
            worker_id = assignment['WorkerId']
            assignment_id = assignment['AssignmentId']
            answer_xml = xmltodict.parse(assignment['Answer'])

            # the answer is an xml document. we pull out the value of the first
            # //QuestionFormAnswers/Answer/FreeText
            # answer = answer_xml.getElementsByTagName('FreeText')[0]
            p = Articles.objects.latest('pub_date')
            if type(answer_xml['QuestionFormAnswers']['Answer']) is list:
                # Multiple fields in HIT layout

                res = []

                #  results = []
                for answer_field in answer_xml['QuestionFormAnswers']['Answer']:
                    # print("For input field: " + answer_field['QuestionIdentifier'])
                    # print("Submitted answer: " + answer_field['FreeText'])
                    res.append(answer_field['FreeText'])
                    # print(res)

                myString = " \n".join(map(str, res))

# print(' Worker with ID {} submitted assignment {} and gave the answer "{}"'.format(worker_id,assignment_id,answer0))

                i=0
                while i < len(res):
                    result = res[i]
                   # print(result)
                    a = Answer(result=result, pub_date=pub_date, article_id=p.id)
                    a.save()
                    i = i+1

            # See https://stackoverflow.com/questions/317413
            else:
                # One field found in HIT layout
                # print("For input field: " + answer_xml['QuestionFormAnswers']['Answer']['QuestionIdentifier'])
                # print("Submitted answer: " + answer_xml['QuestionFormAnswers']['Answer']['FreeText'])
                answer = answer_xml['QuestionFormAnswers']['Answer']['FreeText']
                a = Answer(result=answer, pub_date=pub_date, article_id=p.id)
                a.save()

# print('The Worker with ID {} submitted assignment {} and gave the answer "{}"'.format(worker_id,assignment_id,answer))

            # Approve the Assignment (if it hasn't already been approved)
            if assignment['AssignmentStatus'] == 'Submitted':
                print('Approving Assignment {}'.format(assignment_id))
                mturk.approve_assignment(
                    AssignmentId=assignment_id,
                    RequesterFeedback='good',
                    OverrideRejection=False,
                )
    else:
        print("No results ready yet")

        print(time.ctime())
        threading.Timer(WAIT_SECONDS, check_res).start()

