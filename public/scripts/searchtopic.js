$(() => {
    $.ajax({
      method: "GET",
      url: "/api/searchtopic"
    }).done((resources) => {
      for(details of resources) {
        $("#resource").append(`
        <div class="col-sm-4">
        <article class="resource">
        <p class='resource-title'>${details.title}</p>
        <p class='resource-description'>${details.description}</p>
        <p>Post by: ${details.username}</p>
        <footer>
        <a href="/${details.id}">View resource</a>
        <i class="icon far fa-thumbs-up"></i>
        <i class="icon fas fa-heart"></i>
        <i class="icon fas fa-comment-alt"></i>
        </footer>
        </article>
        </div>`)
      }
    });
  });
  
  