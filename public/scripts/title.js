//title from database
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/resources-title"
    }).done((result) => {
      for(let id of result) {
        $("<div>").text(id.title).appendTo($(".resourceid-title"));
      }
    });
  })