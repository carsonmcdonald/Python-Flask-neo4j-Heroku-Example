/**
 *
 * Wraps calls to the StackExchange API. For more information on the API see:
 *
 *   https://api.stackexchange.com/docs
 *
 */
var seapi = (function()
{
  var api_key = 'yk6QAruLVEfkEwFMixDhPg((';
  var api_endpoint = 'https://api.stackexchange.com/2.0';
  var site_shortname = 'programmers';

  var _createURL = function(call_type, request_values, sort_by, extra) {
    // todo create batches instead
    var tmp_values = _.uniq(request_values);
    if(tmp_values.length > 50) {
      tmp_values = _.initial(tmp_values, tmp_values.length-50);
    } 

    return api_endpoint + "/" + 
           call_type + "/" + 
           escape(tmp_values.join(';')) + 
           (extra != null ? ('/' + extra) : '') +
           "?order=desc&sort=" + sort_by + 
           "&site=" + site_shortname + 
           "&key=" + escape(api_key) + 
           "&callback=?";
  }

  //
  // This pulls data from the page, makes calls to the API with the ids pulled from the page
  // and then populates the empty fields on the page with the information returned.
  //
  var _populateValues = function() {
    var user_ids = [];
    var answer_ids = [];
    var question_ids = [];
    var tags = [];

    // All user display blocks have a reparea
    $('.reparea').each(function(i, el) {
      user_ids.push($(el).attr('data-userid'));
    });

    // All answers have a answeraccepted
    $('.answeraccepted').each(function(i, el) {
      answer_ids.push($(el).attr('data-postid'));
    });

    // All questions have a questiontitle
    $('.questiontitle').each(function(i, el) {
      question_ids.push($(el).attr('data-postid'));
    });

    // All tags have a tagcountarea
    $('.tagcountarea').each(function(i, el) {
      tags.push($(el).attr('data-tagname'));
    });

    if(user_ids.length > 0) {
      $.getJSON(_createURL('users', user_ids, 'reputation', null), function(response) {
        _.each(response.items, function(item) {
          $('.username').each(function(i, el) { if($(el).attr('data-userid') == item['user_id']) { $(el).html(item['display_name']); } });
          $('.reparea').each(function(i, el) { if($(el).attr('data-userid') == item['user_id']) { $(el).html(item['reputation']); } });
          $('.profileimage').each(function(i, el) { if($(el).attr('data-userid') == item['user_id']) { $(el).attr('src', item['profile_image']); } });
        });
      });
    }

    if(answer_ids.length > 0) {
      $.getJSON(_createURL('answers', answer_ids, 'activity', null), function(response) {
        _.each(response.items, function(item) {
          $('.answeraccepted').each(function(i, el) { if($(el).attr('data-postid') == item['answer_id']) { $(el).html(item['is_accepted'] ? "Yes" : "No"); } });
          $('.answervotes').each(function(i, el) { if($(el).attr('data-postid') == item['answer_id']) { $(el).html(item['score']); } });
        });
      });
    }

    if(question_ids.length > 0) {
      $.getJSON(_createURL('questions', question_ids, 'activity', null), function(response) {
        _.each(response.items, function(item) {
          $('.questiontitle').each(function(i, el) { if($(el).attr('data-postid') == item['question_id']) { $(el).html(item['title']); } });
          $('.questionviews').each(function(i, el) { if($(el).attr('data-postid') == item['question_id']) { $(el).html(item['view_count']); } });
          $('.questionvotes').each(function(i, el) { if($(el).attr('data-postid') == item['question_id']) { $(el).html(item['score']); } });
          $('.qaccepteda').each(function(i, el) { if($(el).attr('data-postid') == item['question_id']) { 
            if(item['accepted_answer_id']) {
              $(el).html('<a href="#" class="postdrilldown" data-postid="' + item['accepted_answer_id'] + '">' + item['accepted_answer_id'] + '</a>'); 
            } else {
              $(el).html('No'); 
            }
          } });
        });
      });
    }

    if(tags.length > 0) {
      $.getJSON(_createURL('tags', tags, 'popular', 'info'), function(response) {
        _.each(response.items, function(item) {
          $('.tagcountarea').each(function(i, el) { if($(el).attr('data-tagname') == item['name']) { $(el).html(item['count']); } });
          $('.tagsynarea').each(function(i, el) { if($(el).attr('data-tagname') == item['name']) { $(el).html(item['has_synonyms'] ? "Yes" : "No"); } });
        });
      });
    }
  }

  return {
    populateValues: _populateValues
  };
})();
