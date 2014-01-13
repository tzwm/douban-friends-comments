function removeAd(){
  $("#dale_movie_subject_top_right").remove();
  $("#dale_movie_subject_middle_right").remove();
}

function addFriendComment(){
  //var others_interests = $("#subject-others-interests");
  //var friends_comments = $.extend(true, {}, others_interests); 

  $(".aside").prepend("<div id=subject-friends-comments></div>");

  var friends_comments = $("#subject-friends-comments");
  friends_comments.prepend("<h2>好友评价 · · · · · ·</h2>");
}

removeAd();
addFriendComment();

