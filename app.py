#!/usr/bin/env python

"""
The main Flask application.

This app needs neo4j to run correctly. It assumes that there is an
instance running on localhost if the NEO4J_REST_URL environment 
variable is not set to point to one.

The PORT environment variable can be used to change the port that
the app listens for connections on.
"""

__author__    = "Carson McDonald <carson@ioncannon.net>"
__copyright__ = "Copyright 2012 Carson McDonald"
__license__   = "See LICENSE"

import os
import util
import time
import json
import ConfigParser
import StringIO

from urlparse import urlparse

from flask import *

from py2neo import neo4j
from py2neo import cypher

"""
Start off by setting up Flask, the complex queries configuration, the
neo4j service and the neo4j index variables.
"""

app = Flask(__name__)

config = ConfigParser.ConfigParser()
config.read('complexqueries.cfg')

if os.environ.get('NEO4J_REST_URL'):
  graph_db_url = urlparse(os.environ.get('NEO4J_REST_URL'))
  graph_db = neo4j.GraphDatabaseService('http://{host}:{port}{path}'.format(host=graph_db_url.hostname, port=graph_db_url.port, path=graph_db_url.path), user_name=graph_db_url.username, password=graph_db_url.password)
else:
  graph_db = neo4j.GraphDatabaseService('http://localhost:7474/db/data')

users_idx = graph_db.get_node_index("Users")
posts_idx = graph_db.get_node_index("Posts")
tags_idx = graph_db.get_node_index("Tags")
bookmarks_idx  = graph_db.get_node_index("Bookmarks")

def transform_entry(entry):
  """
  Turn the given neo4j Node into a dictionary based on the Node's type.

  The raw neo4j Node doesn't serialize to JSON so this converts it into
  something that will.

  @param entry:       the neo4j Node to transform.
  """

  # This transform is used for just nodes as well so first check to see if there is a relation
  if 'relation' not in entry:
    node = entry
    relation = {'weight':1}
  elif entry['relation'] is None:
    node = entry['node']
    relation = {'weight':1}
  else:
    node = entry['node']
    relation = entry['relation']

  # Skip anything that isn't a dict or doesn't have an ntype property (bookmarks are skipped here)
  if type(node) is not dict or 'ntype' not in node:
    return None

  if node['ntype'] == 'user':
    return {'user':{'name':node['name'],'user_id':node['userId'], 'weight':relation['weight']}}
  elif node['ntype'] == 'a':
    return {'answer':{'post_id':node['postId'], 'favorite_count':node['favoriteCount'], 'score':node['score'], 'weight':relation['weight']}}
  elif node['ntype'] == 'q':
    return {'question':{'post_id':node['postId'], 'favorite_count':node['favoriteCount'], 'score':node['score'], 'weight':relation['weight']}}
  elif node['ntype'] == 'tag':
    return {'tag':{'name':node['tagName'], 'weight':relation['weight']}}
  else:
    return None


def combine_relation_and_node(relationship):
  """
  Combine a neo4j Relation's properties and the relation's end Node's properties
  into a single dictionary.

  @param relationship:       the neo4j Relationship to transform.
  """

  relation_props = relationship.get_properties()
  node_props = relationship.get_end_node().get_properties()
  return {'relation':relation_props, 'node':node_props}


def output_bookmarks(bookmark, start_ts):
  """
  Pulls together the bookmarks for a given user into a single response
  dictionary.

  @param bookmark:       the bookmark data to return
  @param start_ts:       the starting time of the current call
  """

  users_related = map(combine_relation_and_node, bookmark[0].get_relationships(neo4j.Direction.OUTGOING, "bookmarked_user"))
  posts_related = map(combine_relation_and_node, bookmark[0].get_relationships(neo4j.Direction.OUTGOING, "bookmarked_post"))
  tags_related = map(combine_relation_and_node, bookmark[0].get_relationships(neo4j.Direction.OUTGOING, "bookmarked_tag"))

  users = filter(lambda r: r is not None, map(transform_entry, users_related))
  posts = filter(lambda r: r is not None, map(transform_entry, posts_related))
  tags = filter(lambda r: r is not None, map(transform_entry, tags_related))

  return jsonify(users=users, posts=posts, tags=tags, exec_time=(time.time()-start_ts))


@app.route("/", methods=["GET"])
def index():
  """
  The root route will send the user check to see if a user has a bookmarkId
  and send them to their unique page with those bookmarks. If they don't have
  a bookmarkId already it will create a new one and then send them to that.

  If you wanted to repurpose this app you probably wouldn't want to do this but
  instead show a static page here.
  """

  broot = request.cookies.get('broot') or util.next_code()

  # if the given root doesn't exist yet then create it
  bookmark = bookmarks_idx.search("bookmarkId", broot)
  if len(bookmark) == 0:
    node = graph_db.create_node({"bookmarkId": broot})
    bookmarks_idx.add(node, "bookmarkId", broot)

  return redirect("/h/" + broot, code=302)


@app.route("/h/<broot>", methods=["GET"])
def bookmark_history(broot):
  """
  This route is where all users land after they are given a unique bookmark.

  The only static page in the app is rendered here and can be found in the 
  templates directory.

  If you wanted to repurpose this app you probably wouldn't need this route.
  """

  bookmark = bookmarks_idx.search("bookmarkId", broot)
  if len(bookmark) == 0:
    return redirect("/", code=302)
  else:
    resp = make_response(render_template('index.html'))
    resp.set_cookie('broot', broot, 60 * 60 * 24 * 365 * 10)
    return resp


@app.route("/service/bookmarks/<broot>", methods=["GET"])
def get_bookmarks(broot):
  """
  This route handles requests for bookmarks given a bookmarkId.

  If no bookmarks are found for the given bookmarkId a 404 status is returned.

  neo4j note: This is an example of using an index search.

  @param broot:       the bookmarkId to look up bookmarks for
  """

  start_ts = time.time()
  bookmark = bookmarks_idx.search("bookmarkId", broot)
  if len(bookmark) > 0:
    return output_bookmarks(bookmark, start_ts)
  else:
    abort(404)


@app.route("/service/bookmarks/<broot>", methods=["POST"])
def add_bookmark(broot):
  """
  This route handles adding and removing bookmarks as well as setting the weight
  of a bookmark.

  The JSON sent should fit one of the following formats:

    {'type':'user', 'userId':1234, 'action':'add'}
    {'type':'post', 'postId':9000, 'action':'add'}
    {'type':'tag', 'tagName':'school', 'action':'add'}
    {'type':'tag', 'tagName':'school', 'action':'weight', 'weight':2}

  Action can be add, delete or weight.

  If the posted JSON is not found, the action is an unknown type, or the reference
  node can note be found a 404 is returned.

  neo4j note: This route contains an example of adding, deleting, modifying and
  associating Nodes and Relationships.

  @param broot:       the bookmarkId to modify
  """

  start_ts = time.time()
  bookmark = bookmarks_idx.search("bookmarkId", broot)
  if len(bookmark) > 0 and request.json is not None:

    ref_node = []
    ref_type = request.json['type']
    if request.json['type'] == "user":
      ref_node = users_idx.search("userId", request.json['uid'])
    elif request.json['type'] == "post":
      ref_node = posts_idx.search("postId", request.json['pid'])
    elif request.json['type'] == "tag":
      ref_node = tags_idx.search("tagName", request.json['name'])

    if len(ref_node) > 0:
      if request.json['action'] == "add":
        relation = bookmark[0].create_relationship_to(ref_node[0], 'bookmarked_' + ref_type)
        relation.set_properties({"weight":1})
      elif request.json['action'] == "delete" or request.json['action'] == "weight":
        # Find the related nodes of the correct type (user, post or tag)
        related = bookmark[0].get_relationships(neo4j.Direction.OUTGOING, 'bookmarked_' + ref_type)
        # Find the correct relation to delete based on the end node
        for relation in related:
          if relation.get_end_node()._uri == ref_node[0]._uri:
            if request.json['action'] == "delete":
              relation.delete()
            elif request.json['action'] == "weight":
              relation.set_properties({"weight":request.json['weight']})

      return output_bookmarks(bookmark, start_ts)
    else:
      abort(404)

  else:
    abort(404)


@app.route("/service/simplequery/<qtype>/<qval>", methods=["GET"])
def get_node_simplequery(qtype, qval):
  """
  Run a simple neo4j query for information.

  The results of the neo4j query are transformed into a JSON response with
  only the relivant information for the given query type.

  neo4j note: This code contains an example of using directional lookups
  on a Node.

  @param qtype:       the type of query being made (user, post or tag)
  @param qval:        the value to introduce into the query
  """

  start_ts = time.time()
  res = []

  if qtype == 'user':
    res = users_idx.search("userId", qval)
  elif qtype == 'post':
    res = posts_idx.search("postId", qval)
  elif qtype == 'tag':
    res = tags_idx.search("tagName", qval)

  if len(res) > 0:
    out_related = graph_db.get_properties(*res[0].get_related_nodes(neo4j.Direction.OUTGOING))
    in_related = graph_db.get_properties(*res[0].get_related_nodes(neo4j.Direction.INCOMING))

    # transform the nodes into what we want on the client side
    out_related = filter(lambda r: r is not None, map(transform_entry, out_related))
    in_related = filter(lambda r: r is not None, map(transform_entry, in_related))

    return jsonify(node=transform_entry(res[0].get_properties()), outgoing=out_related, incoming=in_related, exec_time=(time.time()-start_ts))
  else:
    abort(404)


@app.route("/service/complexquery/<qtype>/<qval>", methods=["GET"])
def get_node_complexquery(qtype, qval):
  """
  Run one of the pre-configured Cypher queries against the neo4j database.

  See the complexqueries.cfg file for all the pre-configured queries. Most of
  the pre-configured queries are limited to just a query but there is also an
  option to add a post-query block of code that will further transform the
  query results. Here is an example that takes the given post value and looks 
  up posts that are tagged the same then transforms the results so that they
  are sorted by tag count and limited to the first 20 tag sets:

    [similarly.tagged]
    query: start startQuestion=node:Posts(postId="{val}")
           match startQuestion -[:tagged]-> (tag) <-[:tagged]- (endQuestion)
           return endQuestion.postId as questionId, collect(tag.tagName) as tags 
           order by questionId
    exec:result = map(lambda r: [r[0], r[1].replace('[', '').replace(']', '').replace(', ', ',').split(',')], result[0])
         result.sort(lambda x,y: cmp(len(x[1]), len(y[1])))
         result.reverse()
         del result[20:]
         result = map(lambda r: {'questionId':r[0], 'tags':r[1]}, result)
         result = json.dumps(result)

  The result of an exec code block is expected to be in JSON format.

  neo4j note: This code is an example of executing a Cypher query.

  @param qtype:       the type of query being made, must match an entry in 
                      the complexqueries.cfg file
  @param qval:        the value to introduce into the query
  """

  start_ts = time.time()
  raw_query = config.get(qtype, "query")
  if raw_query is not None:
    query = raw_query.format(val=util.simple_sanitize(qval))

    result = None
    if config.has_option(qtype, "exec"):
      result = cypher.execute(query, graph_db)
      exec(config.get(qtype, "exec"))
    else:
      temp = StringIO.StringIO()
      cypher.execute_and_output_as_json(query, graph_db, temp)
      result = temp.getvalue()
      temp.close()

    resp = make_response('{{"value":"{value}", "result":{result}, "exec_time":{exec_time}}}'.format(value=qval, result=result, exec_time=(time.time()-start_ts)))
    resp.headers['Content-type'] = 'application/json'
    return resp
  else:
    abort(404)


if __name__ == '__main__':
  # Bind to PORT if defined, otherwise default to 5000.
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port, debug=True)
