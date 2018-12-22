$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});
$(document).ready(function(){
  $( ".like-button" ).on( "click", function(e) {
    console.log('this is like button')
  })
});