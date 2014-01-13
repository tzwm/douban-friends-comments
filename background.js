var friends_list;

function getFriendsList(uid){
  var url = 'http://api.douban.com/shuo/v2/users/' +
            uid + '/following?count=200';

  $.get(url, function(data, status){
    if(status=='success'){
      friends_list = data;

      var i = 0;
      while(i<friends_list.length){
        if('original_site_id' in friends_list[i])
          friends_list.splice(i, 1);
        else
          i++;
      }
    }
  });
}

function getDomainFromUrl(url){
  var host = "null";
  if(typeof url == "undefined" || null == url)
    url = window.location.href;
  var regex = /.*\:\/\/([^\/]*).*/;
  var match = url.match(regex);
  if(typeof match != "undefined" && null != match)
    host = match[1];
  return host;
}

function isDoubanMovieUrl(url){
  var tmp = "http://movie.douban.com/subject/";
  return url.toLowerCase().substring(0, tmp.length) == tmp; 
}

function checkForValidUrl(tabId, changeInfo, tab) {
  if(isDoubanMovieUrl(tab.url)){
    chrome.pageAction.show(tabId);

    getFriendsList('tzwm');

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "test", data: friends_list}, function(response) {
        console.log(response.farewell);
      });
    });
  };
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

