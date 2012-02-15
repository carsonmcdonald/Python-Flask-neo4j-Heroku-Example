#!/usr/bin/env python

"""
A simple app that will load the app data using a GraphML file.
"""

__author__    = "Carson McDonald <carson@ioncannon.net>"
__copyright__ = "Copyright 2012 Carson McDonald"
__license__   = "See LICENSE"

import os

from urlparse import urlparse
from py2neo import neo4j
from py2neo import gremlin

if os.environ.get('NEO4J_REST_URL'):
  graph_db_url = urlparse(os.environ.get('NEO4J_REST_URL'))
  graph_db = neo4j.GraphDatabaseService('http://{host}:{port}{path}'.format(host=graph_db_url.hostname, port=graph_db_url.port, path=graph_db_url.path), user_name=graph_db_url.username, password=graph_db_url.password)
else:
  graph_db = neo4j.GraphDatabaseService("http://localhost:7474/db/data")


#
# Note that the URL for the GraphML file here does not exist, you would need to create it first.
#
script = """
g.clear();
g.startTransaction();
g.createAutomaticIndex('Users', Vertex.class, ['userId'] as Set);
g.createAutomaticIndex('Posts', Vertex.class, ['postId'] as Set);
g.createAutomaticIndex('Tags', Vertex.class, ['tagName'] as Set);
g.createAutomaticIndex('Bookmarks', Vertex.class, ['bookmarkId'] as Set);
g.loadGraphML('http://neo4jdata.s3.amazonaws.com/neo4j/programming.graph.xml');
g.stopTransaction(TransactionalGraph.Conclusion.SUCCESS);
"""

gremlin.execute(script, graph_db)
