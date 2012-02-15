/**
 *
 * Simple utility functions.
 *
 */
var utils = (function()
{
  function _getCookie(name)
  {
    var i,x,y,cookies=document.cookie.split(";");
    for (i=0;i<cookies.length;i++)
    {
      x=cookies[i].substr(0,cookies[i].indexOf("="));
      y=cookies[i].substr(cookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==name) return unescape(y);
    }
    return null;
  }

  //
  // Given a url in one of the following formats produces the correct type and value.
  //
  // Question
  //   http://host.com/questions/2770735/javascript-url-parsing
  //   http://host.com/q/2770735/25343
  //   post:2770735
  // Answer
  //   http://host.com/questions/2770735/javascript-url-parsing/2770774#2770774
  //   http://host.com/a/2770758/25343 
  //   post:2770758
  // User
  //   http://host.com/users/25343/me
  //   user:23534
  // Tag
  //   http://host.com/questions/tagged/java
  //   tag:java
  function _parseSEURL(url) {
    try {
      var quick_lookup = url.toLowerCase().split(':');
      if(quick_lookup[0] === 'post' || quick_lookup[0] === 'user' || quick_lookup[0] === 'tag' ) {
        return {"type":quick_lookup[0], "value":quick_lookup[1]};
      }

      var parts = url.toLowerCase().replace('http://', '').split('/');
      if(parts[1] === 'questions' && parts[2] === 'tagged') {
        return {"type":"tag", "value":parts[3]};
      }

      if(parts[1] === 'users') {
        return {"type":"user", "value":parts[2]};
      }

      if(parts[1] === 'a') { // Answer
        return {"type":"post", "value":parts[2]};
      }

      if(parts[1] === 'q') { // Question
        return {"type":"post", "value":parts[2]};
      }

      if(parts[1] === 'questions' && parts.length === 4) { // Question
        return {"type":"post", "value":parts[2]};
      }

      if(parts[1] === 'questions' && parts.length === 5) { // Answer
        return {"type":"post", "value":parts[4].split('#')[0]};
      }
    } catch(e) { 
      console.log(e);
    }

    return null;
  }

  //
  // Capitalize a string.
  //
  function _capitalize(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  //
  // Special case of looking for an item in an array of hashes.
  //
  var _arrayContains = function(arr, type, index, looking_for) {
    for(var i=0; i<arr.length; i++) {
      if(arr[i][type] && arr[i][type][index] === looking_for) {
        return true;
      }
    }
    return false;
  }

  return {
    getCookie: _getCookie,
    parseSEURL: _parseSEURL,
    arrayContains: _arrayContains,
    capitalize: _capitalize
  };
})();
