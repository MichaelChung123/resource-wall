$(() => {
    $.ajax({
        method: "GET",
        url: "/api/resources-url"
      }).done((result) => {
        for(let id of result) {
          $("<div>").text(id.url).appendTo($(".resourceid-url"));
        }
    });
})