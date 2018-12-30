$(() => {
    $.ajax({
      method: "GET",
      url: "/api/userscollection"
    }).done((collectiondetails) => {
      console.log("Collection details: ", collectiondetails);
      for(details of collectiondetails) {
        const $resource = $("<article>").addClass("resource").appendTo($("#resource"));
        const $header = $("<header>").appendTo($resource);
        $("<h2>").text(details.title).appendTo($header);
        $("<p>").text(details.description).appendTo($resource);
        const $footer = $("<footer>").html(`<a href="/${details.resource_id}">View resource</a>`).appendTo($resource);
        $('<i class="icon fas fa-star"></i>').appendTo($footer);
        $('<i class="icon fas fa-comment"></i>').appendTo($footer);
        $('<i class="icon fas fa-heart"></i>').appendTo($footer);
      }
 
    });
  });
  