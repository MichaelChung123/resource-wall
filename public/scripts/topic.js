//title from database
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/resources-topic"
    }).done((result) => {
      for(let id of result) {
        $("<div>").text(id.topic).appendTo($(".resourceid-topic"));
      }
    });
  })