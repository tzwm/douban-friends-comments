function removeAd(){
  $("#dale_movie_subject_top_right").remove();
  $("#dale_movie_subject_middle_right").remove();
}

function addFriendsCommentsSubject(){
  //var others_interests = $("#subject-others-interests");
  //var friends_comments = $.extend(true, {}, others_interests); 

  $(".aside").prepend("<div id=subject-friends-comments></div>");

  var friends_comments = $("#subject-friends-comments");
  friends_comments.prepend("<h2>好友评价 · · · · · ·</h2>");
}

function listFriendsComments(friends_list){
  var friends_comments = $("#subject-friends-comments");
  friends_comments.append('<ul></ul>');
  var ul = friends_comments.children('ul');
  
  for(var i=0; i<4; i++){
    var li = '<li>';
    var avatar = '<a class=\"others-interest-avatar\" href=\"';
    avatar += friends_list[i].url + '\">';
    avatar += '<img class=\"pil\" src=\"' + 
      friends_list[i].small_avatar + '\"></a>';

    li += avatar + '</li>';

    ul.append(li);
  }
}

removeAd();
addFriendsCommentsSubject();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if(request.action == 'test'){
      listFriendsComments(request.data);
      sendResponse({farewell: 'goodbye'});
    }
  });


