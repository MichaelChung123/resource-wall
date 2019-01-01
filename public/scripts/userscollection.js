$(() => {
    $.ajax({
      method: "GET",
      url: "/api/userscollection"
    }).done((collectiondetails) => {
      for(details of collectiondetails) {
        const $resource = $("<article>").addClass("resource").appendTo($("#resource"));
        const $header = $("<header>").appendTo($resource);
        $("<p class='resource-title'>").text(details.title).appendTo($header);
        $("<p class='resource-description'>").text(details.description).appendTo($resource);
        const $footer = $("<footer>").html(`<a href="/${details.id}">View resource</a>`).appendTo($resource);
        $('<i class="icon fas fa-star"></i>').appendTo($footer);
        $('<i class="icon fas fa-comment"></i>').appendTo($footer);
        $('<i class="icon fas fa-thumbs-up"></i>').appendTo($footer);
      }
 
    });
  });
   