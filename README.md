Python + Flask + neo4j on Heroku Example
========================================

I put this project together as an entry for the [Heroku neo4j challenge](http://neo4j-challenge.herokuapp.com/) and it should be fairly easy to get a feel for how to integrate neo4j into an app of your own or use as a base for a new app.

The app is a simple data explorer with bookmarking ability to show off some of the features of neo4j. A subset of data from a [Stack Exchange CC data dump](http://blog.stackoverflow.com/2009/06/stack-overflow-creative-commons-data-dump/), specifically [Programers Stack Exchange](http://programmers.stackexchange.com/), is used to populate a sample database. The bookmarking feature allows for weights to be added for later use in recomendations.

For more details about the the app check out the [wiki page](https://github.com/carsonmcdonald/Python-Flask-neo4j-Heroku-Example/wiki/App-Details).

I'm using the following stack on the server side:

* Python
* [Flask](http://flask.pocoo.org) web microframework
* [neo4j](http://neo4j.org/) graph database
* [py2neo](http://py2neo.org/) neo4j python library

I'm using the following stack on the client side:

* [handlebars.js]( http://handlebarsjs.com/) for templates
* [jquery](http://jquery.com/)
* [jquery address](http://www.asual.com/jquery/address/) for history support
* [underscore.js]( http://documentcloud.github.com/underscore/)
* [Twitter bootstrap](https://github.com/twitter/bootstrap)

If you find this code helpful take a minute and rate it on [Gensen](http://gensen.herokuapp.com/show/25). If you want to use this code as a base for another project take a look at the comments labeled "neo4j note" for hints on what might be most useful.

Deploying Localy
================

There are a few requirements for the app to run:

* neo4j needs to be installed and running. Following the [neo4j server guide](http://docs.neo4j.org/chunked/stable/server.html) should make that happen.
* [virtualenv](http://pypi.python.org/pypi/virtualenv) needs to be installed.

After verifing that requirements are ready the following should get things running:

    git clone git@github.com:carsonmcdonald/Python-Flask-neo4j-Heroku-Example.git
    cd Python-Flask-neo4j-Heroku-Example
    virtualenv venv --distribute
    source venv/bin/activate
    pip install -r requirements.txt
    # The following command will take a while to run but will produce output as it does
    python load.py
    # Once the load is complete the app is ready to run
    python app.py 

You can also use [Foreman](http://blog.daviddollar.org/2011/05/06/introducing-foreman.html) to run locally.

Heroku Deployment
=================

    git clone git@github.com:carsonmcdonald/Python-Flask-neo4j-Heroku-Example.git
    cd Python-Flask-neo4j-Heroku-Example
    virtualenv venv --distribute
    source venv/bin/activate
    pip install -r requirements.txt
    heroku create --stack cedar
    heroku addons:add neo4j
    heroku scale web=0
    git push heroku master
    # This next step will take a while, maybe 30 minutes monitor it with the "heroku logs" command
    heroku run:detached python load.py 
    # Once the load has completed
    heroku scale web=1

See the [Heroku Python howto](http://devcenter.heroku.com/articles/python) for more information.

License
=======

See the LICENSE file.
