from django.shortcuts import render
import re
import datetime
from django.utils import timezone
import json
from django.http import HttpResponse, Http404
from .models import Articles


def index(request):
    return render(request, 'article/index.html')


def review(request):
    return render(request, 'article/review.html')


def submit(request):
    return render(request, 'article/submit.html')


def create_article(request):
    if request.method == 'POST':
        data = request.body

        dtc = json.loads(request.body.decode('utf-8'))
        for item in dtc['highlight']:
            a = item.replace("\['", '"')
            print(a)
        # a = [item.replace("\['", '"') for item in dtc]
        # for key in dtc.items():
        #     dtc[key] = dtc[key].replace('\[', '')
        #     # dtc[key] = re.sub('[^A-Za-z0-9:, ]+', '', dtc[key])

        art = dtc['article']
        highl = a
        pub_date = timezone.now()
        print(art)
        # art = request.body['article']
        # highl = request.body['highlight']
        # date = request.body['pub_date']
        response_data = {}

        a = Articles(article=art, highlight=highl, pub_date=pub_date)
        a.save()
        response_data['result'] = 'Create post successful!'
        response_data['article-id'] = a.pk
        response_data['article'] = a.article
        response_data['highlight'] = a.highlight
        response_data['pub_date'] = str(a.pub_date)

        return HttpResponse(json.dumps(response_data), content_type="application/json")
    else:
        raise Http404

# class Connection(object):
#     """
#     API to access the ArticleApi database.
#
#     The sqlite3 connection instance is accessible to all the methods of this
#     class through the :py:attr:`self.con` attribute.
#
#     An instance of this class should not be instantiated directly using the
#     constructor. Instead use the :py:meth:`Engine.connect`.
#
#     Use the method :py:meth:`close` in order to close a connection.
#     A :py:class:`Connection` **MUST** always be closed once when it is not going to be
#     utilized anymore in order to release internal locks.
#
#     :param db_path: Location of the database file.
#     :type db_path: str
#
#     """
#
#     def __init__(self, db_path):
#         super(Connection, self).__init__()
#         self.con = sqlite3.connect(db_path)
#         self._isclosed = False
#
#     def isclosed(self):
#         """
#         :return: ``True`` if connection has already being closed.
#
#         """
#         return self._isclosed
#
#     def close(self):
#         """
#         Closes the database connection, commiting all changes.
#
#         """
#         if self.con and not self._isclosed:
#             self.con.commit()
#             self.con.close()
#             self._isclosed = True
#
#     def set_foreign_keys_support(self):
#         """
#         Activate the support for foreign keys.
#
#         :return: ``True`` if operation succeed and ``False`` otherwise.
#
#         """
#         keys_on = 'PRAGMA foreign_keys = ON'
#         try:
#             cur = self.con.cursor()
#             cur.execute(keys_on)
#             return True
#         except sqlite3.Error as excp:
#             print("Error %s:" % excp.args[0])
#             return False
#
#     def _create_article_object(self, row):
#         """
#         It takes a database Row and transform it into a python dictionary.
#
#         :param row: The row obtained from the database.
#         :type row: sqlite3.Row
#         :return: a dictionary with the following format:
#
#             * ``article``: article
#             * ``publicationdate``: UNIX timestamp when the user registered in
#                                  the system (long integer)
#
#
#         """
#         return {'article': (row['article']), 'publicationdate': row['pub_date']}
#
#     def _create_article_list_object(self, row):
#         """
#         :param row: The row obtained from the database.
#         :type row: sqlite3.Row
#         :return: a dictionary with the keys ``article`` and
#             ``publicationdate``
#
#         """
#         return {'article': row['article'], 'highlight': row['highlight'], 'publicationdate': row['pub_date']}
#
#     # def _create_highlight_object(self, row):
#     #     """
#     #     Takes a database exercise row, and converts it to a python dictionary.
#     #
#     #     :param row: The row obtained from the database.
#     #     :type row: sqlite3.Row
#     #
#     #     :return: dictionary with the following format:
#     #         * ``article_id``: id of the article to which the highlight belongs
#     #         * ``highlight_id``: unique id number of the highlight
#     #         * ``highlight``: highlight
#     #         * ``tweets``: nr of tweets
#     #         * ``references``: nr of references
#     #     """
#     #     return {
#     #         'article_id': self._fetch_article(row['article_id']),
#     #         'highlight_id': row['highlight_id'],
#     #         'highlight': row['highlight'],
#     #         'tweets': row['tweets'],
#     #         'references': row['references']
#     #     }
#
#     # def _create_highlights_list_object(self, row):
#     #     """
#     #     :param row: The row obtained from the database.
#     #     :type row: sqlite3.Row
#     #     :return: a dictionary with the keys ``highlight_id``, ``highlight`` and
#     #         ``article_id``
#     #
#     #     """
#     #     return {'highlight_id': row['highlight_id'], 'highlight': row['highlight'], 'article_id': self._fetch_article(row['article_id'])}
#
#     def _fetch_article(self, article_id):
#         """
#         Queries the database to find the nickname belonging to a particular user_id.
#         :param article_id: The article id.
#         :return: The article of for the article id.
#         """
#         self.set_foreign_keys_support()
#         self.con.row_factory = sqlite3.Row
#         cur = self.con.cursor()
#         query = 'SELECT article FROM article WHERE article_id = ?'
#         p = (article_id,)
#         cur.execute(query, p)
#         row = cur.fetchone()
#         if not row:
#             return None
#         return row['article']
#
#     def append_article(self, article):
#         """
#         Create a new article in the database.
#         :param str article: The nickname of the new user
#         :return: the article of the created user or None if the user could not been added to the database.
#
#         """
#         # Create the SQL Statements
#         # SQL Statement for extracting the article id given a article
#         query1 = 'SELECT article_id FROM articles WHERE article = ?'
#         # SQL Statement to create the row in  users table
#         query2 = 'INSERT INTO articles(article,pub_date)\
#                   VALUES(?,?)'
#         # temporal variables for user table
#         # timestamp will be used for reg_date.
#         timestamp = datetime.datetime.utcnow().replace(tzinfo=utc)
#
#         # Activate foreign key support
#         self.set_foreign_keys_support()
#         # Cursor and row initialization
#         self.con.row_factory = sqlite3.Row
#         cur = self.con.cursor()
#         # Execute the main SQL statement to extract the id associated to a article
#         p = (article,)
#         cur.execute(query1, p)
#         # No value expected (no other user with that nickname expected)
#         row = cur.fetchone()
#         # If there is no user add rows in user
#         if row is None:
#             # Add the row in article table
#             # Execute the statement
#             p = (article, timestamp)
#             cur.execute(query2, p)
#             # Extract the rowid => article-id
#
#             self.con.commit()
#
#             return article
#
#         else:
#             return None
#
#     def create_highlight(self, highlight, tweets, references, article):
#         """
#         :param str highlight: the article's highlight
#         :param str tweets: the number of tweets
#         :param str references:  the number of  references
#         :param str article:  the article that highlight belongs to
#         :return: the id of the created exercise or None if the message was not found.
#         """
#         # SQL Statement for getting the user id
#         query1 = 'SELECT article_id from articles WHERE article = ?'
#
#         # SQL Statement for inserting the data
#         stmnt = 'INSERT INTO exercises (article_id,highlight,tweets,references) VALUES(?,?,?,?)'
#         article_id = None
#
#         # fetch row
#         self.set_foreign_keys_support()
#         self.con.row_factory = sqlite3.Row
#         cur = self.con.cursor()
#         p = (article,)
#         cur.execute(query1, p)
#         # Extract user id
#         row = cur.fetchone()
#         if row is not None:
#             article_id = row["article_id"]
#         # Generate the values for SQL statement
#         p = (article_id, highlight, tweets, references)
#         # Execute the statement
#         cur.execute(stmnt, p)
#         self.con.commit()
#
#         # Return the id in
#         return cur.lastrowid
