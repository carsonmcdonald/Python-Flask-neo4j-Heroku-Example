(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<p>This is a demo of a <a href=\"https://github.com/carsonmcdonald/Python-Flask-neo4j-Heroku-Example\">Python + Flask + neo4j app running on Heroku</a> (for a lot more detail check out the <a href=\"https://github.com/carsonmcdonald/Python-Flask-neo4j-Heroku-Example/wiki/App-Details\">wiki</a>). If you want help using the app check out the <a class=\"helplink\" href=\"#\">help page</a></p>\n\n<p>I put this project together as an entry for the <a href=\"http://neo4j-challenge.herokuapp.com/\">Heroku neo4j challenge</a> and it should be fairly easy to get a feel for how to integrate neo4j into an app of your own or use as a base for a new app.</p>\n\n<p>The app is a simple data explorer with bookmarking ability to show off some of the features of neo4j. A subset of data from a <a href=\"http://blog.stackoverflow.com/2009/06/stack-overflow-creative-commons-data-dump/\">Stack Exchange CC data dump</a>, specifically <a href=\"http://programmers.stackexchange.com/\">Programers Stack Exchange</a>, is used to populate a sample database. The bookmarking feature allows for weights to be added for later use in recomendations.</p>\n\n<p>For more details about the the app check out the <a href=\"https://github.com/carsonmcdonald/Python-Flask-neo4j-Heroku-Example/wiki/App-Details\">wiki page</a>.</p>\n\n<p>I&#39;m using the following stack on the server side:</p>\n\n<ul>\n<li>Python</li>\n<li><a href=\"http://flask.pocoo.org\">Flask</a> web microframework</li>\n<li><a href=\"http://neo4j.org/\">neo4j</a> graph database</li>\n<li><a href=\"http://py2neo.org/\">py2neo</a> neo4j python library</li>\n</ul>\n\n<p>I&#39;m using the following stack on the client side:</p>\n\n<ul>\n<li><a href=\"http://handlebarsjs.com/\">handlebars.js</a> for templates</li>\n<li><a href=\"http://jquery.com/\">jquery</a></li>\n<li><a href=\"http://www.asual.com/jquery/address/\">jquery address</a> for history support</li>\n<li><a href=\"http://documentcloud.github.com/underscore/\">underscore.js</a></li>\n<li><a href=\"https://github.com/twitter/bootstrap\">Twitter bootstrap</a></li>\n</ul>\n\n<p>If you find this code helpful take a minute and rate it on <a href=\"http://gensen.herokuapp.com/show/25\">Gensen</a>.</p>\n";});
templates['alert'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"span1\">&nbsp;</div>\n<div class=\"alert alert-block alert-error fade in span8\">\n  <a class=\"close\" data-dismiss=\"alert\" href=\"#\">×</a>\n  <h4 class=\"alert-heading\">";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h4>\n  <p>";
  foundHelper = helpers.message;
  stack1 = foundHelper || depth0.message;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "message", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n</div>\n<div class=\"span1\">&nbsp;</div>\n";
  return buffer;});
templates['answer_bookmarked'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n  <div class=\"bookmarkhead\">\n    <a href=\"#\" class=\"delpostbookmark\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-remove-sign\"></i></a>\n\n    <form class=\"form-horizontal\" action=\"javascript:void(0);\">\n      Answer: <a href=\"#\" class=\"postdrilldown\" data-bookmarked=\"true\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n\n      Weight: <input type=\"text\" class=\"adjustpostweight\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.weight;
  stack1 = foundHelper || depth0.weight;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "weight", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"/>\n    </form> <br/>\n\n  </div>\n\n";
  return buffer;}

  foundHelper = helpers.answer;
  stack1 = foundHelper || depth0.answer;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
templates['answer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n<div class=\"resultsection\">\n  <h3>Answer(";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")\n    <a href=\"#\" class=\"postbookmark\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-bookmark ";
  foundHelper = helpers.bookmarked;
  stack1 = foundHelper || depth0.bookmarked;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i></a>\n  </h3>\n\n  <p>\n    <b>Answer:</b> <a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n    <b>Favorite count:</b> ";
  foundHelper = helpers.favorite_count;
  stack1 = foundHelper || depth0.favorite_count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "favorite_count", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <br/> \n    <b>Votes:</b> ";
  foundHelper = helpers.score;
  stack1 = foundHelper || depth0.score;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "score", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <b>Accepted:</b> <span class=\"answeraccepted\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n    <b>Link:</b> <a href=\"http://programmers.stackexchange.com/a/";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">http://programmers.stackexchange.com/a/";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n  </p>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"similar.answers\" data-value=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Similar Answers</a>\n  </div>\n</div>\n\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return " ";}

function program4(depth0,data) {
  
  
  return "icon-white";}

  foundHelper = helpers.answer;
  stack1 = foundHelper || depth0.answer;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
templates['bookmarks'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <form class=\"form-horizontal\">\n    <a href=\"#\" class=\"btn complexquery\" data-query=\"weighted.bookmark.recomendations\" data-value=\"";
  foundHelper = helpers.bookmarks_id;
  stack1 = foundHelper || depth0.bookmarks_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "bookmarks_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Recomendations</a>\n  </form>\n  ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.users;
  stack1 = foundHelper || depth0.users;
  stack2 = helpers.each;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n      ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.user_bookmarked, 'user_bookmarked', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    ";
  return buffer;}

function program6(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.posts;
  stack1 = foundHelper || depth0.posts;
  stack2 = helpers.each;
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program9(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <li>\n      ";
  foundHelper = helpers.question;
  stack1 = foundHelper || depth0.question;
  stack2 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.answer;
  stack1 = foundHelper || depth0.answer;
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    ";
  return buffer;}
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.question_bookmarked, 'question_bookmarked', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.answer_bookmarked, 'answer_bookmarked', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program14(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

function program16(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.tags;
  stack1 = foundHelper || depth0.tags;
  stack2 = helpers.each;
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n      ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.tag_bookmarked, 'tag_bookmarked', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    ";
  return buffer;}

function program19(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<div style=\"height: 45px; padding: 5px; text-align:center;\">\n  ";
  foundHelper = helpers.bookmarks_id;
  stack1 = foundHelper || depth0.bookmarks_id;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<h3>Users</h3>\n<ul class=\"bookmarklist\" id=\"users\">\n  ";
  foundHelper = helpers.users;
  stack1 = foundHelper || depth0.users;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<h3>Posts</h3>\n<ul class=\"bookmarklist\" id=\"posts\">\n  ";
  foundHelper = helpers.posts;
  stack1 = foundHelper || depth0.posts;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(14, program14, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<h3>Tags</h3>\n<ul class=\"bookmarklist\" id=\"tags\">\n  ";
  foundHelper = helpers.tags;
  stack1 = foundHelper || depth0.tags;
  stack2 = helpers['if'];
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(19, program19, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['help'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "This is a demo app that uses Python, Flask and neo4j. To learn more about the app itself check out the <a class=\"aboutlink\" href=\"#\">about page</a> or the <a href=\"https://github.com/carsonmcdonald/Python-Flask-neo4j-Heroku-Example\">Github project</a> where there is a lot more information. You can explore what the app can do by reading on.\n\n<h2>Getting started</h2>\n\n<p>You can always come back to this page by clicking the <a class=\"helplink\" href=\"#\">help link</a> at the top.</p>\n\n<p>This app contains a subset of data from <a href=\"http://programmers.stackexchange.com/\">programmers.stackexchange.com</a>. That subset contains the first 10,000 posts (question/answer), user and tag data. You can start by enter any of the following in the \"Staring point\" field above: </p>\n\n<ul>\n  <li>\n    A URL <br/>\n    <b>For users:</b> http://programmers.stackexchange.com/users/3708/benoit <br/>\n    <b>A question:</b> http://programmers.stackexchange.com/questions/885/is-it-worth-it-for-programmers-to-go-to-graduate-school <br/>\n    <b>An answer:</b> http://programmers.stackexchange.com/questions/9885/how-much-documentation-is-enough/9987#9987 <br/>\n    <b>A tag:</b> http://programmers.stackexchange.com/questions/tagged/java\n  </li>\n  <li>\n    A quick link <br/>\n    <b>For users:</b> user:3708 <br/>\n    <b>A question:</b> post:885 <br/>\n    <b>An answer:</b> post:9987 <br/>\n    <b>A tag:</b> tag:java\n  </li>\n</ul>\n\n<h2>Features</h2>\n\n<ul>\n  <li><b>Bookmark</b> a post, user or answer by clicking the <i class=\"icon-bookmark icon-white\"></i> icon in the upper right corner of any block. Once bookmarked the items will show with the <i class=\"icon-bookmark\"></i> icon and clicking them again will un-bookmark them. You may also remove a bookmark by click the <i class=\"icon-remove-sign\"></i> icon to the right of the red line in the bookmarks list.</li>\n  <li>The <b>item trail</b> at the top of the results list allows you to navigate back to any point while you are drilling down into each item.</li>\n  <li>Every item type has at least one <b>advanced query</b> that can be run. The advanced query will show at the bottom of the item box.</li>\n  <li>The <b>recomendations</b> button above the bookmarks list will run a special advanced query to give you recomendations based on the weights given to each bookmark. You may change the weight of any bookmark by changing the weight number and then leaving the field.</li>\n  <li>Clicking on a <b>link<b/> with the <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/> icon at the end will take you to the Programmers page for that item.</li>\n</ul>\n";});
templates['nodeandrels'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.truncated;
  stack1 = foundHelper || depth0.truncated;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <i class=\"icon-chevron-left\"></i> ";
  foundHelper = helpers.count;
  stack1 = foundHelper || depth0.count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "count", { hash: {} }); }
  buffer += escapeExpression(stack1) + " more <span class=\"divider\"><i class=\"icon-chevron-right\"></i></span>\n    ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      ";
  foundHelper = helpers.active;
  stack1 = foundHelper || depth0.active;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"active\">\n          <a href=\"#\" class=\"breadcrumblink\" data-index=\"";
  foundHelper = helpers.index;
  stack1 = foundHelper || depth0.index;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "index", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n        </li>\n      ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>\n          <a href=\"#\" class=\"breadcrumblink\" data-index=\"";
  foundHelper = helpers.index;
  stack1 = foundHelper || depth0.index;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "index", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <span class=\"divider\"><i class=\"icon-chevron-right\"></i></span>\n        </li>\n      ";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  ";
  foundHelper = helpers.answer;
  stack1 = foundHelper || depth0.answer;
  stack2 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  foundHelper = helpers.question;
  stack1 = foundHelper || depth0.question;
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  foundHelper = helpers.tag;
  stack1 = foundHelper || depth0.tag;
  stack2 = helpers['if'];
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  foundHelper = helpers.user;
  stack1 = foundHelper || depth0.user;
  stack2 = helpers['if'];
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.answer, 'answer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.question, 'question', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.tag, 'tag', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.user, 'user', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}

function program18(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.incoming;
  stack1 = foundHelper || depth0.incoming;
  stack2 = helpers.each;
  tmp1 = self.program(19, program19, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program19(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <li>\n      ";
  foundHelper = helpers.answer;
  stack1 = foundHelper || depth0.answer;
  stack2 = helpers['if'];
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.question;
  stack1 = foundHelper || depth0.question;
  stack2 = helpers['if'];
  tmp1 = self.program(22, program22, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.tag;
  stack1 = foundHelper || depth0.tag;
  stack2 = helpers['if'];
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.user;
  stack1 = foundHelper || depth0.user;
  stack2 = helpers['if'];
  tmp1 = self.program(26, program26, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    ";
  return buffer;}
function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.answer, 'answer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.question, 'question', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.tag, 'tag', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.user, 'user', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program28(depth0,data) {
  
  
  return "\n    Nothing found\n  ";}

function program30(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.outgoing;
  stack1 = foundHelper || depth0.outgoing;
  stack2 = helpers.each;
  tmp1 = self.program(31, program31, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program31(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <li>\n      ";
  foundHelper = helpers.answer;
  stack1 = foundHelper || depth0.answer;
  stack2 = helpers['if'];
  tmp1 = self.program(32, program32, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.question;
  stack1 = foundHelper || depth0.question;
  stack2 = helpers['if'];
  tmp1 = self.program(34, program34, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.tag;
  stack1 = foundHelper || depth0.tag;
  stack2 = helpers['if'];
  tmp1 = self.program(36, program36, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.user;
  stack1 = foundHelper || depth0.user;
  stack2 = helpers['if'];
  tmp1 = self.program(38, program38, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    ";
  return buffer;}
function program32(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.answer, 'answer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program34(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.question, 'question', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program36(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.tag, 'tag', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program38(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.user, 'user', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program40(depth0,data) {
  
  
  return "\n    Nothing found\n  ";}

  buffer += "<ul class=\"breadcrumb\">\n  ";
  foundHelper = helpers.breadcrumb;
  stack1 = foundHelper || depth0.breadcrumb;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<h3>Root Node</h3>\n<br/>\n\n";
  foundHelper = helpers.node;
  stack1 = foundHelper || depth0.node;
  stack2 = helpers['with'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<br/>\n<h3>Incoming Nodes</h3>\n<br/>\n\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.incoming;
  stack1 = foundHelper || depth0.incoming;
  stack2 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(28, program28, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<br/>\n<h3>Outgoing Nodes</h3>\n<br/>\n\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.outgoing;
  stack1 = foundHelper || depth0.outgoing;
  stack2 = helpers['if'];
  tmp1 = self.program(30, program30, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(40, program40, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['question_bookmarked'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n  <div class=\"bookmarkhead\">\n    <a href=\"#\" class=\"delpostbookmark\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-remove-sign\"></i></a>\n\n    <form class=\"form-horizontal\" action=\"javascript:void(0);\">\n      Question: <a href=\"#\" class=\"postdrilldown\" data-bookmarked=\"true\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n\n      Weight: <input type=\"text\" class=\"adjustpostweight\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.weight;
  stack1 = foundHelper || depth0.weight;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "weight", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"/>\n    </form> <br/>\n\n  </div>\n\n";
  return buffer;}

  foundHelper = helpers.question;
  stack1 = foundHelper || depth0.question;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
templates['question'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n<div class=\"resultsection\">\n  <h3>Question(";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")\n      <a href=\"#\" class=\"postbookmark\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-bookmark ";
  foundHelper = helpers.bookmarked;
  stack1 = foundHelper || depth0.bookmarked;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i></a>\n  </h3>\n\n  <p>\n    <b>Question:</b> <a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n    <b>Title:</b> <a href=\"http://programmers.stackexchange.com/questions/";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"questiontitle\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a> <br/> \n    <b>Votes:</b> ";
  foundHelper = helpers.score;
  stack1 = foundHelper || depth0.score;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "score", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <b>Favorites:</b> ";
  foundHelper = helpers.favorite_count;
  stack1 = foundHelper || depth0.favorite_count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "favorite_count", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <b>Views:</b> <span class=\"questionviews\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/> \n    <b>Accepted Answer:</b> <span class=\"qaccepteda\" data-postid=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/> \n  </p>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"similarly.tagged\" data-value=\"";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Similarly Tagged</a>\n  </div>\n</div>\n\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return " ";}

function program4(depth0,data) {
  
  
  return "icon-white";}

  foundHelper = helpers.question;
  stack1 = foundHelper || depth0.question;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
templates['questions.answered'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <div class=\"resultsection\">\n          <h3>Result</h3>\n\n          <table style=\"padding:5px;\">\n            <tr><td valign=\"top\" align=\"right\"><b>Question:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Title:</b></td><td><a href=\"http://programmers.stackexchange.com/questions/";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"questiontitle\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Answerer:</b></td><td><a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.answererId;
  stack1 = foundHelper || depth0.answererId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answererId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.answererId;
  stack1 = foundHelper || depth0.answererId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answererId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Answer:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n          </table>\n        </div>\n      </li>\n    ";
  return buffer;}

function program4(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<div class=\"resultsection\">\n  <h3>User(";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n  <table width=\"100%\">\n    <tr>\n      <td  width=\"76px\" style=\"padding:3px;\">\n        <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><img width=\"64\" height=\"64\" class=\"profileimage\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" src=\"\"/></a>\n      </td>\n      <td valign=\"top\">\n        <b>Name:</b> <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"username\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></a> <br/>\n        <b>Reputation:</b> <span class=\"reparea\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n        <b>Link:</b> <a href=\"http://programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n      </td>\n    </tr>\n  </table>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answered Questions</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"questions.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Answered</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.question.tags\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tags</a> <br/>\n\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.qtags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tag Popularity</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.atags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answer Tag Popularity</a>\n  </div>\n</div>\n\n<br/>\n<h3>Questions Answered</h3>\n<br/>\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['similar.answers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <div class=\"resultsection\">\n          <h3>Result</h3>\n\n          <table style=\"padding:5px;\">\n            <tr><td valign=\"top\" align=\"right\"><b>Answer:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Votes:</b></td><td><span class=\"answervotes\" data-postid=\"";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Accepted:</b></td><td><span class=\"answeraccepted\" data-postid=\"";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Link:</b></td><td><a href=\"http://programmers.stackexchange.com/a/";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">http://programmers.stackexchange.com/a/";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a></td></tr>\n          </table>\n        </div>\n      </li>\n    ";
  return buffer;}

function program4(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<div class=\"resultsection\">\n  <h3>Answer(";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n  <p>\n    <b>Answer:</b> <a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n    <b>Votes:</b> <span class=\"answervotes\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <b>Accepted:</b> <span class=\"answeraccepted\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n    <b>Link:</b> <a href=\"http://programmers.stackexchange.com/a/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">http://programmers.stackexchange.com/a/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n  </p>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"similar.answers\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Similar Answers</a>\n  </div>\n</div>\n\n<br/>\n<h3>Similar Answers</h3>\n<br/>\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['similarly.tagged'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <li>\n        <div class=\"resultsection\">\n          <h3>Result</h3>\n\n          <table style=\"padding:5px;\">\n            <tr><td valign=\"top\" align=\"right\"><b>Question:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Title:</b></td><td><a href=\"http://programmers.stackexchange.com/questions/";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"questiontitle\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a></td></tr>\n            <tr>\n              <td valign=\"top\" align=\"right\"><b>Tags:</b></td>\n              <td>\n                ";
  foundHelper = helpers.tags;
  stack1 = foundHelper || depth0.tags;
  stack2 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </td>\n            </tr>\n          </table>\n        </div>\n      </li>\n    ";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  <a href=\"#\" class=\"tagdrilldown\" data-tagname=\"";
  stack1 = depth0;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, ".", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, ".", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n                ";
  return buffer;}

function program5(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<div class=\"resultsection\">\n  <h3>Question(";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n  <p>\n    <b>Question:</b> <a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n    <b>Title:</b> <a href=\"http://programmers.stackexchange.com/questions/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"questiontitle\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a> <br/> \n    <b>Votes:</b> <span class=\"questionvotes\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <b>Views:</b> <span class=\"questionviews\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/> \n    <b>Accepted Answer:</b> <span class=\"qaccepteda\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/> \n  </p>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"similarly.tagged\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Similarly Tagged</a>\n  </div>\n</div>\n\n<br/>\n<h3>Similarly Tagged</h3>\n<br/>\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['tag_bookmarked'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n  <div class=\"bookmarkhead\">\n    <a href=\"#\" class=\"deltagbookmark\" data-tagname=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-remove-sign\"></i></a>\n\n    <form class=\"form-horizontal\" action=\"javascript:void(0);\">\n      <a href=\"#\" class=\"tagdrilldown\" data-bookmarked=\"true\" data-tagname=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n\n      Weight: <input type=\"text\" class=\"adjusttagweight\" data-tagname=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.weight;
  stack1 = foundHelper || depth0.weight;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "weight", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"/>\n    </form> <br/>\n\n  </div>\n\n";
  return buffer;}

  foundHelper = helpers.tag;
  stack1 = foundHelper || depth0.tag;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
templates['tag'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n<div class=\"resultsection\">\n  <h3>Tag(";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")\n      <a href=\"#\" class=\"tagbookmark\" data-tagname=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-bookmark ";
  foundHelper = helpers.bookmarked;
  stack1 = foundHelper || depth0.bookmarked;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i></a>\n  </h3>\n\n  <p>\n    <b>Tag:</b> <a href=\"#\" class=\"tagdrilldown\" data-tagname=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n    <b>Count:</b> <span class=\"tagcountarea\" data-tagname=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/> \n    <b>Has synonyms:</b> <span class=\"tagsynarea\" data-tagname=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/> \n    <b>Link:</b> <a href=\"http://programmers.stackexchange.com/tags/";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/info\">http://programmers.stackexchange.com/tags/";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/info <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n  </p>\n\n  <div>\n    <a href=\"#\">Related Tags</a>\n  </div>\n</div>\n\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return " ";}

function program4(depth0,data) {
  
  
  return "icon-white";}

  foundHelper = helpers.tag;
  stack1 = foundHelper || depth0.tag;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
templates['user.answered'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <div class=\"resultsection\">\n          <h3>Result</h3>\n\n          <table style=\"padding:5px;\">\n            <tr><td valign=\"top\" align=\"right\"><b>Answer:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.answerId;
  stack1 = foundHelper || depth0.answerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "answerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Question:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Title:</b></td><td><a href=\"http://programmers.stackexchange.com/questions/";
  foundHelper = helpers.post_id;
  stack1 = foundHelper || depth0.post_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "post_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"questiontitle\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Questioner:</b></td><td><a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.questionerId;
  stack1 = foundHelper || depth0.questionerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.questionerId;
  stack1 = foundHelper || depth0.questionerId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionerId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n          </table>\n        </div>\n      </li>\n    ";
  return buffer;}

function program4(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<div class=\"resultsection\">\n  <h3>User(";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n  <table width=\"100%\">\n    <tr>\n      <td width=\"76px\" style=\"padding:3px;\">\n        <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><img width=\"64\" height=\"64\" class=\"profileimage\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" src=\"\"/></a>\n      </td>\n      <td valign=\"top\">\n        <b>Name:</b> <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"username\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></a> <br/>\n        <b>Reputation:</b> <span class=\"reparea\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n        <b>Link:</b> <a href=\"http://programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n      </td>\n    </tr>\n  </table>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answered Questions</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"questions.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Answered</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.question.tags\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tags</a> <br/>\n\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.qtags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tag Popularity</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.atags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answer Tag Popularity</a>\n  </div>\n</div>\n\n<br/>\n<h3>Answered</h3>\n<br/>\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['user.atags.count'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <div class=\"resultsection\">\n          <h3>Result</h3>\n\n          <table style=\"padding:5px;\">\n            <tr><td valign=\"top\" align=\"right\"><b>Tag:</b></td><td><a href=\"#\" class=\"tagdrilldown\" data-tagname=\"";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Count:</b></td><td>";
  foundHelper = helpers.tagCount;
  stack1 = foundHelper || depth0.tagCount;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagCount", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td></tr>\n          </table>\n        </div>\n      </li>\n    ";
  return buffer;}

function program4(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<div class=\"resultsection\">\n  <h3>User(";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n  <table width=\"100%\">\n    <tr>\n      <td width=\"76px\" style=\"padding:3px;\">\n        <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><img width=\"64\" height=\"64\" class=\"profileimage\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" src=\"\"/></a>\n      </td>\n      <td valign=\"top\">\n        <b>Name:</b> <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"username\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></a> <br/>\n        <b>Reputation:</b> <span class=\"reparea\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n        <b>Link:</b> <a href=\"http://programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n      </td>\n    </tr>\n  </table>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answered Questions</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"questions.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Answered</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.question.tags\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tags</a> <br/>\n\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.qtags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tag Popularity</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.atags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answer Tag Popularity</a>\n  </div>\n</div>\n\n<br/>\n<h3>Popularity of Tags user has Answered Questions of</h3>\n<br/>\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['user_bookmarked'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n  <div class=\"bookmarkhead\">\n    <a href=\"#\" class=\"deluserbookmark\" data-userid=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-remove-sign\"></i></a>\n\n    <form class=\"form-horizontal\" action=\"javascript:void(0);\">\n      <a href=\"#\" class=\"userdrilldown\" data-bookmarked=\"true\" data-userid=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n      Weight: <input type=\"text\" class=\"adjustuserweight\" data-userid=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.weight;
  stack1 = foundHelper || depth0.weight;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "weight", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"/>\n    </form>\n\n  </div>\n\n";
  return buffer;}

  foundHelper = helpers.user;
  stack1 = foundHelper || depth0.user;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
templates['user'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n<div class=\"resultsection\">\n  <h3>User(";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")\n      <a href=\"#\" class=\"userbookmark\" data-userid=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-bookmark ";
  foundHelper = helpers.bookmarked;
  stack1 = foundHelper || depth0.bookmarked;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i></a>\n  </h3>\n\n  <table width=\"100%\">\n    <tr>\n      <td width=\"76px\" style=\"padding:3px;\">\n        <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><img width=\"64\" height=\"64\" class=\"profileimage\" data-userid=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" src=\"\"/></a>\n      </td>\n      <td valign=\"top\">\n        <b>Name:</b> <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> <br/>\n        <b>Reputation:</b> <span class=\"reparea\" data-userid=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n        <b>Link:</b> <a href=\"http://programmers.stackexchange.com/users/";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">programmers.stackexchange.com/users/";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n      </td>\n    </tr>\n  </table>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.answered\" data-value=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answered Questions</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"questions.answered\" data-value=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Answered</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.question.tags\" data-value=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tags</a> <br/>\n\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.qtags.count\" data-value=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tag Popularity</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.atags.count\" data-value=\"";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answer Tag Popularity</a>\n  </div>\n\n</div>\n\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return " ";}

function program4(depth0,data) {
  
  
  return "icon-white";}

  foundHelper = helpers.user;
  stack1 = foundHelper || depth0.user;
  stack2 = helpers['with'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
templates['user.qtags.count'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <div class=\"resultsection\">\n          <h3>Result</h3>\n\n          <table style=\"padding:5px;\">\n            <tr><td valign=\"top\" align=\"right\"><b>Tag:</b></td><td><a href=\"#\" class=\"tagdrilldown\" data-tagname=\"";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Count:</b></td><td>";
  foundHelper = helpers.tagCount;
  stack1 = foundHelper || depth0.tagCount;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagCount", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td></tr>\n          </table>\n        </div>\n      </li>\n    ";
  return buffer;}

function program4(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<div class=\"resultsection\">\n  <h3>User(";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n  <table width=\"100%\">\n    <tr>\n      <td width=\"76px\" style=\"padding:3px;\">\n        <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><img width=\"64\" height=\"64\" class=\"profileimage\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" src=\"\"/></a>\n      </td>\n      <td valign=\"top\">\n        <b>Name:</b> <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"username\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></a> <br/>\n        <b>Reputation:</b> <span class=\"reparea\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n        <b>Link:</b> <a href=\"http://programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n      </td>\n    </tr>\n  </table>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answered Questions</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"questions.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Answered</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.question.tags\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tags</a> <br/>\n\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.qtags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tag Popularity</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.atags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answer Tag Popularity</a>\n  </div>\n</div>\n\n<br/>\n<h3>Tags</h3>\n<br/>\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['user.question.tags'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <div class=\"resultsection\">\n          <h3>Result</h3>\n\n          <table style=\"padding:5px;\">\n            <tr><td valign=\"top\" align=\"right\"><b>Question:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Tag:</b></td><td><a href=\"#\" class=\"tagdrilldown\" data-tagname=\"";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n          </table>\n        </div>\n      </li>\n    ";
  return buffer;}

function program4(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<div class=\"resultsection\">\n  <h3>User(";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n  <table width=\"100%\">\n    <tr>\n      <td width=\"76px\" style=\"padding:3px;\">\n        <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><img width=\"64\" height=\"64\" class=\"profileimage\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" src=\"\"/></a>\n      </td>\n      <td valign=\"top\">\n        <b>Name:</b> <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"username\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></a> <br/>\n        <b>Reputation:</b> <span class=\"reparea\" data-userid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n        <b>Link:</b> <a href=\"http://programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">programmers.stackexchange.com/users/";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n      </td>\n    </tr>\n  </table>\n\n  <div>\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answered Questions</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"questions.answered\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Answered</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.question.tags\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tags</a> <br/>\n\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.qtags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Questions Tag Popularity</a> |\n    <a href=\"#\" class=\"complexquery\" data-query=\"user.atags.count\" data-value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Answer Tag Popularity</a>\n  </div>\n</div>\n\n<br/>\n<h3>Tags for Questions</h3>\n<br/>\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
templates['weighted.bookmark.recomendations'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <li>\n        <div class=\"resultsection\">\n\n        ";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  stack2 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </div>\n      </li>\n    ";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          ";
  foundHelper = helpers.isAnswer;
  stack1 = foundHelper || depth0.isAnswer;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <h3>Answer(";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "postId", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n            <table style=\"padding:5px;\">\n              <tr><td valign=\"top\" align=\"right\"><b>Answer:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "postId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "postId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n              <tr><td valign=\"top\" align=\"right\"><b>Votes:</b></td><td><span class=\"answervotes\" data-postid=\"";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "postId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></td></tr>\n              <tr><td valign=\"top\" align=\"right\"><b>Accepted:</b></td><td><span class=\"answeraccepted\" data-postid=\"";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "postId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></td></tr>\n              <tr><td valign=\"top\" align=\"right\"><b>Link:</b></td><td><a href=\"http://programmers.stackexchange.com/a/";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "postId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">http://programmers.stackexchange.com/a/";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "postId", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a></td></tr>\n            </table>\n          ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <h3>Question(";
  foundHelper = helpers.postId;
  stack1 = foundHelper || depth0.postId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "postId", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n            <table style=\"padding:5px;\">\n              <tr><td valign=\"top\" align=\"right\"><b>Question:</b></td><td><a href=\"#\" class=\"postdrilldown\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n              <tr><td valign=\"top\" align=\"right\"><b>Title:</b></td><td><a href=\"http://programmers.stackexchange.com/questions/";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"questiontitle\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a></td></tr>\n              <tr><td valign=\"top\" align=\"right\"><b>Votes:</b></td><td><span class=\"questionvotes\" data-postid=\"";
  foundHelper = helpers.questionId;
  stack1 = foundHelper || depth0.questionId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "questionId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></td></tr>\n              <tr><td valign=\"top\" align=\"right\"><b>Views:</b></td><td><span class=\"questionviews\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></td></tr>\n              <tr><td valign=\"top\" align=\"right\"><b>Accepted Answer:</b></td><td><span class=\"qaccepteda\" data-postid=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></td></tr>\n            </table>\n          ";
  return buffer;}

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <h3>User(";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "userId", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n          <table style=\"padding:5px;\">\n            <tr>\n              <td width=\"76px\" style=\"padding:3px;\">\n                <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "userId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><img width=\"64\" height=\"64\" class=\"profileimage\" data-userid=\"";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "userId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" src=\"\"/></a>\n              </td>\n              <td valign=\"top\">\n                <b>Name:</b> <a href=\"#\" class=\"userdrilldown\" data-userid=\"";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "userId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><span class=\"username\" data-userid=\"";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "userId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span></a> <br/>\n                <b>Reputation:</b> <span class=\"reparea\" data-userid=\"";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "userId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></span> <br/>\n                <b>Link:</b> <a href=\"http://programmers.stackexchange.com/users/";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "userId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">programmers.stackexchange.com/users/";
  foundHelper = helpers.userId;
  stack1 = foundHelper || depth0.userId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "userId", { hash: {} }); }
  buffer += escapeExpression(stack1) + " <img src=\"http://sstatic.net/programmers/img/favicon.ico\"/></a>\n              </td>\n            </tr>\n          </table>\n        ";
  return buffer;}

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <h3>Tag(";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</h3>\n\n          <table style=\"padding:5px;\">\n            <tr><td valign=\"top\" align=\"right\"><b>Tag:</b></td><td><a href=\"#\" class=\"tagdrilldown\" data-tagname=\"";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.tagName;
  stack1 = foundHelper || depth0.tagName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td></tr>\n            <tr><td valign=\"top\" align=\"right\"><b>Count:</b></td><td>";
  foundHelper = helpers.tagCount;
  stack1 = foundHelper || depth0.tagCount;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tagCount", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td></tr>\n          </table>\n        ";
  return buffer;}

function program12(depth0,data) {
  
  
  return "\n    <li>None</li>\n  ";}

  buffer += "<h3>Recomendations</h3>\n<br/>\n<ul class=\"nodelist\">\n  ";
  foundHelper = helpers.result;
  stack1 = foundHelper || depth0.result;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(12, program12, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
})();