$(() => {
    $.ajax({
      method: "GET",
      url: "/api/searchtopic"
    }).done((resources) => {
      for(details of resources) {
        const $resource = $("<article>").addClass("resource").appendTo($("#resource"));
        const $header = $("<header>").appendTo($resource);
        $("<p class='resource-title'>").text(details.title).appendTo($header);
        $("<p class='resource-description'>").text(details.description).appendTo($resource);
        $("<p>").text(`Post by: ${details.username}`).appendTo($resource);
        const $footer = $("<footer>").html(`<a href="/${details.id}">View resource</a>`).appendTo($resource);
        $('<i class="icon far fa-thumbs-up"></i>').appendTo($footer);
        $('<i class="icon fas fa-heart"></i>').appendTo($footer);
        $('<i class="icon fas fa-comment-alt"></i>').appendTo($footer);
      }
    });
  });
  
  