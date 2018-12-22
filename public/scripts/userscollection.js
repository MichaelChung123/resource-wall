$(() => {
    $.ajax({
      method: "GET",
      url: "/api/collectiondetails"
    }).done((collectiondetails) => {
      for(details of collectiondetails) {
        $("<div>").text(details.title).appendTo($("body"));
        $("<div>").text(details.description).appendTo($("body"));
        $("<div>").text(details.url).appendTo($("body"));
      }
    });
  });
  