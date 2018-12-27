// loading comments to resourceid page
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/comments"
    }).done((comments) => {
      for(let com of comments) {
        let $comment = $("<article>").text(com.comment).prependTo($(".resourcecomments"));
        $("<p>").text(`Comment by: ${com.username}`).appendTo($comment);
      }
    });
  })