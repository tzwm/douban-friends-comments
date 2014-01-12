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
     }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

