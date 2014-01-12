function removeAd(){
  var ad = $("#dale_movie_subject_top_right");
  ad.remove();
}

function addFriendComment(){
  var others_interests = $("#subject-others-interests");
  var friend_comment = $.extend(true, {}, others_interests); 

  friend_comment.children("h2").text("好友评价 · · · · · · ");

  $(".aside").prepend(friend_comment);
}

removeAd();
addFriendComment();

