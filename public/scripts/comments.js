// loading comments to resourceid page
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/comments"
    }).done((comments) => {
      for(let com of comments) {
        $("<article>").text(com.comment).prependTo($(".seed-data"));
      }
    });
  })