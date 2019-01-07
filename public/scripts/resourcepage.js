//title from database
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/resources-page"
    }).done((result) => {
      for(let id of result) {
        $("<div>").text(id.title).appendTo($(".resourceid-title"));
        $("<div>").text(id.topic).appendTo($(".resourceid-topic"));
        $('.website-button').append(`<a href='${id.url}'><button class="goto-button">Visit Resource</button></a>`)
      }
    });
  })