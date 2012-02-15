#!/usr/bin/env python

"""
A simple script that will load the app data using the data files found in static/initialdata/

This script assumes that the database is empty and does not attempt to clear existing nodes.
"""

__author__    = "Carson McDonald <carson@ioncannon.net>"
__copyright__ = "Copyright 2012 Carson McDonald"
__license__   = "See LICENSE"

import os
import gzip

from urlparse import urlparse
from py2neo import neo4j
from py2neo import gremlin

"""
A couple setup variables that can be changed. The load directory is where the static
initialization files are assumed to be. The batch size is how large of a request is
made for each call to the REST service.
"""

load_dir = "static/initialdata/"
batch_size = 500

def get_graph_db():
  if os.environ.get('NEO4J_REST_URL'):
    graph_db_url = urlparse(os.environ.get('NEO4J_REST_URL'))
    return neo4j.GraphDatabaseService('http://{host}:{port}{path}'.format(host=graph_db_url.hostname, port=graph_db_url.port, path=graph_db_url.path), user_name=graph_db_url.username, password=graph_db_url.password)
  else:
    return neo4j.GraphDatabaseService("http://localhost:7474/db/data")

def load_post_nodes(graph_db):
  """
  Load post nodes
  File format: ntype|postId|favoriteCount|score

  @param:        graph_db a connection to the neo4j database
  """

  posts_idx = graph_db.get_node_index("Posts")

  print "Loading post nodes"
  postnodesfile = gzip.open(load_dir + 'postnodes.dat.gz', 'rb')
  data_set = []
  count = 0
  for line in postnodesfile:
    if count > 0:
      values = line.rstrip().split('|')
      data_set.append({ 'ntype':values[0], 'postId':int(values[1]), 'favoriteCount':int(values[2]), 'score':int(values[3]) })
    count += 1
    if count % batch_size == 0:
      if count % (batch_size * 10) == 0:
        print "\tSaving batch: {count}".format(count=count)
      nodes = graph_db.create_nodes(*data_set)
      data_set = []

      posts_idx.start_batch()
      for node in nodes: posts_idx.add(node, 'postId', node.get_properties()['postId']) 
      posts_idx.submit_batch()

  if len(data_set) != 0:
    print "\tSaving batch: {count}".format(count=count)
    nodes = graph_db.create_nodes(*data_set)
    data_set = []

    posts_idx.start_batch()
    for node in nodes: posts_idx.add(node, 'postId', node.get_properties()['postId']) 
    posts_idx.submit_batch()

  postnodesfile.close()

def load_tag_nodes(graph_db):
  """
  Load tag nodes
  File format: id|ntype|tagName

  @param:        graph_db a connection to the neo4j database
  """

  tags_idx = graph_db.get_node_index("Tags")

  print "Loading tag nodes"
  tagnodesfile = gzip.open(load_dir + 'tagnodes.dat.gz', 'rb')
  data_set = []
  count = 0
  for line in tagnodesfile:
    if count > 0:
      values = line.rstrip().split('|')
      data_set.append({ 'ntype':'tag', 'tagName':values[0] })
    count += 1
    if count % batch_size == 0:
      if count % (batch_size * 10) == 0:
        print "\tSaving batch: {count}".format(count=count)
      nodes = graph_db.create_nodes(*data_set)
      data_set = []

      tags_idx.start_batch()
      for node in nodes: tags_idx.add(node, 'tagName', node.get_properties()['tagName']) 
      tags_idx.submit_batch()

  if len(data_set) != 0:
    print "\tSaving batch: {count}".format(count=count)
    nodes = graph_db.create_nodes(*data_set)
    data_set = []

    tags_idx.start_batch()
    for node in nodes: tags_idx.add(node, 'tagName', node.get_properties()['tagName']) 
    tags_idx.submit_batch()

  tagnodesfile.close()

def load_user_nodes(graph_db):
  """
  Load user nodes
  File format: id|ntype|userId|name

  @param:        graph_db a connection to the neo4j database
  """

  users_idx = graph_db.get_node_index("Users")

  print "Loading user nodes"
  usernodesfile = gzip.open(load_dir + 'usernodes.dat.gz', 'rb')
  data_set = []
  count = 0
  for line in usernodesfile:
    if count > 0:
      values = line.rstrip().split('|')
      data_set.append({ 'ntype':'user', 'userId':int(values[0]), 'name':values[1] })
    count += 1
    if count % batch_size == 0:
      if count % (batch_size * 10) == 0:
        print "\tSaving batch: {count}".format(count=count)
      nodes = graph_db.create_nodes(*data_set)
      data_set = []

      users_idx.start_batch()
      for node in nodes: users_idx.add(node, 'userId', node.get_properties()['userId']) 
      users_idx.submit_batch()

  if len(data_set) != 0:
    print "\tSaving batch: {count}".format(count=count)
    nodes = graph_db.create_nodes(*data_set)
    data_set = []

    users_idx.start_batch()
    for node in nodes: users_idx.add(node, 'userId', node.get_properties()['userId']) 
    users_idx.submit_batch()

  usernodesfile.close()

def load_user_to_post_rels(graph_db):
  """
  Load user to post relationships
  File format: source|target|etype

  @param:        graph_db a connection to the neo4j database
  """

  users_idx = graph_db.get_node_index("Users")
  posts_idx = graph_db.get_node_index("Posts")

  print "Loading user to post relations"
  usertopostfile = gzip.open(load_dir + 'usertopost.dat.gz', 'rb')
  data_set = []
  count = 0
  for line in usertopostfile:
    if count > 0:
      values = line.rstrip().split('|')

      source_node = users_idx.search('userId', int(values[0]))
      target_node = posts_idx.search('postId', int(values[1]))
      if len(source_node) != 1 or len(target_node) != 1:
        print "Could not find node that should be available: {start} -> {end}".format(start=values[0], end=values[1])
      else:
        data_set.append({ 'start_node':source_node[0], 'end_node':target_node[0], 'type':'posted', 'data': {'etype':values[2]} })

    count += 1
    if count % batch_size == 0:
      if count % (batch_size * 10) == 0:
        print "\tSaving batch: {count}".format(count=count)
      graph_db.create_relationships(*data_set)
      data_set = []

  if len(data_set) != 0:
    print "\tSaving batch: {count}".format(count=count)
    graph_db.create_relationships(*data_set)
    data_set = []

  usertopostfile.close()

def load_tag_to_post_rels(graph_db):
  """
  Load tag to post relationships
  File format: source|target

  @param:        graph_db a connection to the neo4j database
  """

  posts_idx = graph_db.get_node_index("Posts")
  tags_idx = graph_db.get_node_index("Tags")

  print "Loading tag to post relations"
  tagtopostfile = gzip.open(load_dir + 'tagtopost.dat.gz', 'rb')
  data_set = []
  count = 0
  for line in tagtopostfile:
    if count > 0:
      values = line.rstrip().split('|')

      source_node = posts_idx.search('postId', int(values[0]))
      target_node = tags_idx.search('tagName', values[1])
      if len(source_node) != 1 or len(target_node) != 1:
        print "Could not find node that should be available: {start} -> {end}".format(start=values[0], end=values[1])
      else:
        data_set.append({ 'start_node':source_node[0], 'end_node':target_node[0], 'type':'tagged' })

    count += 1
    if count % batch_size == 0:
      if count % (batch_size * 10) == 0:
        print "\tSaving batch: {count}".format(count=count)
      graph_db.create_relationships(*data_set)
      data_set = []

  if len(data_set) != 0:
    print "\tSaving batch: {count}".format(count=count)
    graph_db.create_relationships(*data_set)
    data_set = []

  tagtopostfile.close()

def load_post_to_user_rels(graph_db):
  """
  Load post to user relationships
  File format: source|target

  @param:        graph_db a connection to the neo4j database
  """

  users_idx = graph_db.get_node_index("Users")
  posts_idx = graph_db.get_node_index("Posts")

  print "Loading post to user relations"
  posttouserfile = gzip.open(load_dir + 'posttouser.dat.gz', 'rb')
  data_set = []
  count = 0
  for line in posttouserfile:
    if count > 0:
      values = line.rstrip().split('|')

      source_node = posts_idx.search('postId', int(values[0]))
      target_node = users_idx.search('userId', int(values[1]))
      if len(source_node) != 1 or len(target_node) != 1:
        print "Could not find node that should be available: {start} -> {end}".format(start=values[0], end=values[1])
      else:
        data_set.append({ 'start_node':source_node[0], 'end_node':target_node[0], 'type':'posted_by' })

    count += 1
    if count % batch_size == 0:
      if count % (batch_size * 10) == 0:
        print "\tSaving batch: {count}".format(count=count)
      graph_db.create_relationships(*data_set)
      data_set = []

  if len(data_set) != 0:
    print "\tSaving batch: {count}".format(count=count)
    graph_db.create_relationships(*data_set)
    data_set = []

  posttouserfile.close()

def load_child_to_parent_rels(graph_db):
  """
  Load post child parent relationships
  File format: source|target|accepted

  @param:        graph_db a connection to the neo4j database
  """

  posts_idx = graph_db.get_node_index("Posts")

  print "Loading post child to parent relations"
  postchildparentfile = gzip.open(load_dir + 'postchildparent.dat.gz', 'rb')
  data_set = []
  count = 0
  for line in postchildparentfile:
    if count > 0:
      values = line.rstrip().split('|')

      source_node = posts_idx.search('postId', int(values[0]))
      target_node = posts_idx.search('postId', int(values[1]))
      if len(source_node) != 1 or len(target_node) != 1:
        print "Could not find node that should be available: {start} -> {end}".format(start=values[0], end=values[1])
      else:
        data_set.append({ 'start_node':source_node[0], 'end_node':target_node[0], 'type':'answer', 'data':{'accepted':values[2] == 'true'} })

    count += 1
    if count % batch_size == 0:
      if count % (batch_size * 10) == 0:
        print "\tSaving batch: {count}".format(count=count)
      graph_db.create_relationships(*data_set)
      data_set = []

  if len(data_set) != 0:
    print "\tSaving batch: {count}".format(count=count)
    graph_db.create_relationships(*data_set)
    data_set = []

  postchildparentfile.close()

def load_parent_to_child_rels(graph_db):
  """
  Load post parent child relationships
  File format: source|target

  @param:        graph_db a connection to the neo4j database
  """

  posts_idx = graph_db.get_node_index("Posts")

  print "Loading post parent to child relations"
  postparentchildfile = gzip.open(load_dir + 'postparentchild.dat.gz', 'rb')
  data_set = []
  count = 0
  for line in postparentchildfile:
    if count > 0:
      values = line.rstrip().split('|')

      source_node = posts_idx.search('postId', int(values[0]))
      target_node = posts_idx.search('postId', int(values[1]))
      if len(source_node) != 1 or len(target_node) != 1:
        print "Could not find node that should be available: {start} -> {end}".format(start=values[0], end=values[1])
      else:
        data_set.append({ 'start_node':source_node[0], 'end_node':target_node[0], 'type':'question' })

    count += 1
    if count % batch_size == 0:
      if count % (batch_size * 10) == 0:
        print "\tSaving batch: {count}".format(count=count)
      graph_db.create_relationships(*data_set)
      data_set = []

  if len(data_set) != 0:
    print "\tSaving batch: {count}".format(count=count)
    graph_db.create_relationships(*data_set)
    data_set = []

  postparentchildfile.close()

if __name__ == '__main__':
  print "Starting load script"

  load_post_nodes(get_graph_db())
  load_tag_nodes(get_graph_db())
  load_user_nodes(get_graph_db())
  load_user_to_post_rels(get_graph_db())
  load_tag_to_post_rels(get_graph_db())
  load_post_to_user_rels(get_graph_db())
  load_child_to_parent_rels(get_graph_db())
  load_parent_to_child_rels(get_graph_db())

  print "Loading data complete"
