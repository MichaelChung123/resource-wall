//title from database
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/resources-page"
    }).done((result) => {
      for(let id of result) {
        $("<div>").text(id.title).appendTo($(".resourceid-title"));
        $("<div>").text(id.topic).appendTo($(".resourceid-topic"));
        $("<div>").text(id.url).appendTo($(".resourceid-url"));
      }
    });
  })