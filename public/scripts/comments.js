$(document).ready(() => {
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/comments"
    }).done((comments) => {
      for(let com of comments) {
        $("<article>").text(com.comment).prependTo($(".all-comments"));
      }
    });
  })
})