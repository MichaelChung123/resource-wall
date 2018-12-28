$(document).ready(function(){
    $( ".button-like" ).on("click", function(e) {
      alert('Thanks for liking my article')
    })
    $.ajax({
      method: "GET",
      url: "/api/likes"
    }).done((result) => {
      $('<div>').text(result[0].count).appendTo('.like-form')      
    })
  });
  