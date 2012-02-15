/**
 *
 * This is the main application. See the end of the file for the hook that starts everything.
 * Depends on jQuery, Underscore, Twitter Bootstram, HandlebarsJS, jQuery address, util.js, 
 * seapi.js and templates.js
 *
 */
var neo4jDemo = (function()
{
  var bookmarks = {users:[], posts:[], tags:[]};
  var link_trail = [];

  //
  // Executes a simple neo4j query for either user, post or tag data.
  //
  var _executeSimpleQuery = function(type, val) {
    _showWaitingState();

    $.ajax({
      url: '/service/simplequery/' + type + '/' + val,
      success: function( data ) {
        if(link_trail.length == 0 || link_trail[link_trail.length-1]['type'] != type || link_trail[link_trail.length-1]['value'] != val) {
          link_trail.push({"type":type,"value":val});
          if(link_trail.length == 1) {
            $.address.value('/s/' + type[0] + '/' + val);
          } else {
            $.address.value($.address.value() + '/' + type[0] + '/' + val);
          }
        }

        _updateWithBookmarkedStatus(data);

        // Make the displayable link trail, only show the last 5
        data['breadcrumb'] = [];
        var sub_trail = link_trail.slice(-5);
        if(sub_trail.length < link_trail.length) {
          data['breadcrumb'].push({"truncated":"true", "count":link_trail.length-sub_trail.length});
        }
        _.each(sub_trail, function(link, i) {
          if(i == sub_trail.length-1) {
            data['breadcrumb'].push({"active":"true", "title":utils.capitalize(link['type']) + "(" + link['value'] + ")", "index":i});
          } else {
            data['breadcrumb'].push({"title":utils.capitalize(link['type']) + "(" + link['value'] + ")", "index":i});
          }
        });

        // Populate the template and display in page
        $("#content").html(Handlebars.templates.nodeandrels(data));

        seapi.populateValues();
      },
      statusCode: {
        404: function() {
          $("#alertarea").html(Handlebars.templates.alert({'title':'Unknown ' + type, 'message':'Unable to find ' + type + '.'}));
        }
      }
    });
  }

  //
  // Execute a complex query again the neo4j database. Every complext query has an associated name
  // that is known on the server side. The given value is pased to the named query when it is run.
  //
  var _executeComplexQuery = function(query, value) {
    _showWaitingState();

    link_trail = [];
    $.address.value('/c/' + query + '/' + value);

    $.ajax({
      url: '/service/complexquery/' + query + '/' + value,
      success: function( data ) {
        $("#content").html(Handlebars.templates[query](data));

        seapi.populateValues();
      },
      statusCode: {
        404: function() {
          $("#alertarea").html(Handlebars.templates.alert({'title':'Unknown User', 'message':'Unable to find user.'}));
        },
        500: function() {
          $("#alertarea").html(Handlebars.templates.alert({'title':'System Error', 'message':'Query could not execute.'}));
        }
      }
    });
  }

  //
  // Load a user bookmarks from the neo4j database.
  //
  var _loadBookmarks = function(bookmarks_id) {
    _showWaitingState();

    $.ajax({
      url: '/service/bookmarks/' + bookmarks_id,
      success: function( data ) {
        bookmarks = data;
        bookmarks['bookmarks_id'] = bookmarks_id;
        $("#bookmarkcontent").html(Handlebars.templates.bookmarks(bookmarks));
      },
      statusCode: {
        404: function() {
          bookmarks = {users:[], posts:[], tags:[]};
          $("#bookmarkcontent").html(Handlebars.templates.bookmarks(bookmarks));
        }
      }
    });
  }

  //
  // Update bookmarks in the neo4j database.
  //
  var _executeBookmarkUpdate = function(action, type, value, weight, context) {
    var post_data = null;
    switch(type) {
      case 'user': post_data = '{"action":"' + action + '", "type":"user", "uid":' + value + ', "weight":' + weight + '}'; break;
      case 'post': post_data = '{"action":"' + action + '", "type":"post", "pid":' + value + ', "weight":' + weight + '}'; break;
      case 'tag': post_data = '{"action":"' + action + '", "type":"tag", "name":"' + value + '", "weight":' + weight + '}'; break;
    }

    if(post_data != null && value != null) {

      var bookmarks_id = utils.getCookie('broot');
      $.ajax({
        url: '/service/bookmarks/' + bookmarks_id,
        type: 'POST',
        contentType: 'application/json',
        data: post_data,
        context: context,
        success: function( resp_data ) {
          bookmarks = resp_data;

          if(action === 'weight') {
            $(this).addClass('success');
            var input = this;
            setTimeout(function() { $(input).removeClass('success'); }, 800);
          } else {
            $("#bookmarkcontent").html(Handlebars.templates.bookmarks(bookmarks));
          }
        },
        statusCode: {
          404: function() {
            $("#alertarea").html(Handlebars.templates.alert({'title':'Bookmark Error', 'message':'Unable to update bookmark.'}));
          }
        },
        complete: function(jqXHR, textStatus) {
          _defaultCompleteHanlder($('#resultruntime'), jqXHR);

          if(action === 'weight') {
            $(this).removeClass('warning');
            if(textStatus != 'success') {
              $("#alertarea").html(Handlebars.templates.alert({'title':'Error Saving', 'message':'Unable to save weight value.'}));
            } 
          } 
        }
      });

    }
  }

  //
  // Handle the explore URL entry box.
  //
  var _handleURLQuery = function(e) {
    e.stopPropagation();

    var query_str = $(e.srcElement).find('#inputURL').val();
    var query = utils.parseSEURL($(e.srcElement).find('#inputURL').val());
    if(query == null) {
      $("#alertarea").html(Handlebars.templates.alert({'title':'Unknown Query', 'message':'Unable to parse the given query: ' + query_str}));
    } else {
      link_trail = [];
      _executeSimpleQuery(query.type, query.value);
    }
  }

  //
  // Handle detail drilldown link clicks
  //
  var _handleSimpleQueryClick = function(e) {
    window.scrollTo(0,0);

    var val = null;
    if(e.data.type === 'user') {
      val = $(this).attr('data-userid');
    } else if(e.data.type === 'post') {
      val = $(this).attr('data-postid');
    } else if(e.data.type === 'tag') {
      val = $(this).attr('data-tagname');
    }

    // If this is from a bookmark then reset the link trail
    if($(this).attr('data-bookmarked')) {
      link_trail = [];
    }

    _executeSimpleQuery(e.data.type, val);

    return false;
  }

  //
  // Handle a click on a complex query link
  //
  var _handleComplexQueryClick = function() {
    window.scrollTo(0,0);

    var query = $(this).attr('data-query');
    var value = $(this).attr('data-value');

    _executeComplexQuery(query, value);

    return false;
  }

  //
  // Handle the bookmark action
  //
  var _handleBookmarkClick = function(e) {
    _showWaitingState();

    var action = e.data.action;
    if(action === 'toggle') {
      var icon = $(this).find('i');
      if($(icon).hasClass('icon-white')) {
        $(icon).removeClass('icon-white');
        action = 'add';
      } else {
        $(icon).addClass('icon-white');
        action = 'delete';
      }
    }
 
    var weight = 1;
    if(action === 'weight') {
      $(this).addClass('warning');
      weight = $(this).val();
    }

    var value = null
    switch(e.data.type) {
      case 'user': value = $(this).attr('data-userid'); break;
      case 'post': value = $(this).attr('data-postid'); break;
      case 'tag': value = $(this).attr('data-tagname'); break;
    }

    // When called from blur this has been set to the current input field
    _executeBookmarkUpdate(action, e.data.type, value, weight, this);

    return false;
  }

  //
  // Set the bookmarked states for the given data
  //
  var _updateWithBookmarkedStatus = function(data) {
    var dirs = ['incoming', 'outgoing'];
    var types = {'question':['posts','post_id'], 'answer':['posts','post_id'], 'user':['users','user_id'], 'tag':['tags','name']};
    _.each(dirs, function(direction) {
      _.each(data[direction], function(entry) {
        _.each(types, function(value, type) {
          if(entry[type] && utils.arrayContains(bookmarks[value[0]], type, value[1], entry[type][value[1]])) {
            entry[type]['bookmarked'] = true;
          }
        });
      });
    });

    var entry = data['node'];
    _.each(types, function(value, type) {
      if(entry[type] && utils.arrayContains(bookmarks[value[0]], type, value[1], entry[type][value[1]])) {
        entry[type]['bookmarked'] = true;
      }
    });
  }


  //
  // Handle clicks on a breadcrumb entry.
  //
  var _handleBreadcrumbClick = function(e) {
    $("#alertarea").html('');

    var path_names = $.address.pathNames();
    var popindex = parseInt($(this).attr('data-index'));
    $(this).parent().parent().children().each(function(i, child) {
      if(parseInt($('.breadcrumblink', child).attr('data-index')) > popindex) {
        $(child).remove();
        link_trail.pop();
        path_names.pop();
        path_names.pop();
      } else if(parseInt($('.breadcrumblink', child).attr('data-index')) == popindex) {
        $(child).addClass('active');
        $('.divider', child).remove();
      } 
    });
    $.address.value(path_names.join('/'));
    
    var query = link_trail[link_trail.length-1];
    _executeSimpleQuery(query['type'], query['value']);

    return false;
  }

  //
  // Handle the URL history changing
  //
  var _handleHistoryChange = function(event) {
    window.scrollTo(0,0);
    $("#alertarea").html('');

    if(event.pathNames.length == 0) {
      // Nothing to do
    } else if(event.pathNames[0] === 's') {
      link_trail = [];
      var type = 'un';
      var value = 'un';
      for(var i=1; i<event.pathNames.length; i+=2) {
        switch(event.pathNames[i]) {
          case 'p': type = 'post'; break;
          case 'u': type = 'user'; break;
          case 't': type = 'tag'; break;
        }
        value = event.pathNames[i+1];
        link_trail.push({"type":type,"value":value});
      }
      _executeSimpleQuery(type, value);
    } else if(event.pathNames[0] === 'c') {
      link_trail = [];
      _executeComplexQuery(event.pathNames[1], event.pathNames[2]);
    }

  }

  //
  // Simple helper to set the waiting state.
  //
  var _showWaitingState = function() {
    $("#alertarea").html('');
    document.body.style.cursor = 'wait';
    $('#resultruntime').html('<img src="/static/img/spinner.gif"/> Loading..');
  }

  //
  // This handles setting the execution time when an AJAX request completes
  //
  var _defaultCompleteHanlder = function(element, XMLHttpRequest) {
    document.body.style.cursor = 'default';

    if(XMLHttpRequest.status == 200) {
      var response = $.parseJSON(XMLHttpRequest.responseText);
      if(response != null && response['exec_time'] != null) {
        $(element).html('(' + Math.round(response['exec_time'] * 1000) + ' ms)');
      }
    } else {
      $(element).html('');
    }
  }

  //
  // Set up all the event handlers and initialize state
  //
  var _initialize = function() {
    $.address.externalChange(_handleHistoryChange);

    // Capture execution time results to display on screen
    $('#resultruntime').ajaxComplete(function(event, XMLHttpRequest, ajaxOptions) { _defaultCompleteHanlder(this, XMLHttpRequest); });

    // Register handlebar partials
    _.each(["user", "answer", "question", "tag", "user_bookmarked", "answer_bookmarked", "question_bookmarked", "tag_bookmarked"], function(partial) {
      Handlebars.registerPartial(partial, Handlebars.templates[partial]);
    });

    // Bind all the click handlers to their functions
    $(document).on('click', '.aboutlink', function(e) { 
      link_trail = [];
      $.address.value('/about');
      $("#content").html(Handlebars.templates.about()); 
      return false; 
    });
    $(document).on('click', '.helplink', function(e) { 
      link_trail = [];
      $.address.value('/help');
      $("#content").html(Handlebars.templates.help()); 
      return false; 
    });

    $('#url-entry').bind('submit', _handleURLQuery);

    $(document).on('click', '.userbookmark', {'action':'toggle', 'type':'user'}, _handleBookmarkClick);
    $(document).on('click', '.postbookmark', {'action':'toggle', 'type':'post'}, _handleBookmarkClick);
    $(document).on('click', '.tagbookmark', {'action':'toggle', 'type':'tag'}, _handleBookmarkClick);

    $(document).on('click', '.deluserbookmark', {'action':'delete', 'type':'user'}, _handleBookmarkClick);
    $(document).on('click', '.delpostbookmark', {'action':'delete', 'type':'post'}, _handleBookmarkClick);
    $(document).on('click', '.deltagbookmark', {'action':'delete', 'type':'tag'}, _handleBookmarkClick);

    $(document).on('blur', '.adjustuserweight', {'action':'weight', 'type':'user'}, _handleBookmarkClick);
    $(document).on('blur', '.adjustpostweight', {'action':'weight', 'type':'post'}, _handleBookmarkClick);
    $(document).on('blur', '.adjusttagweight', {'action':'weight', 'type':'tag'}, _handleBookmarkClick);

    $(document).on('click', '.userdrilldown', {'type':'user'}, _handleSimpleQueryClick);
    $(document).on('click', '.postdrilldown', {'type':'post'}, _handleSimpleQueryClick);
    $(document).on('click', '.tagdrilldown', {'type':'tag'}, _handleSimpleQueryClick);

    $(document).on('click', '.breadcrumblink', _handleBreadcrumbClick);

    $(document).on('click', '.complexquery', _handleComplexQueryClick);

    _loadBookmarks(utils.getCookie('broot'));

    // Display help screen after starting
    $("#content").html(Handlebars.templates.help());
  };

  return {
    initialize: _initialize
  };
})();

jQuery(function($) 
{
  neo4jDemo.initialize();
}); 
