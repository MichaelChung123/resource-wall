$(() => {
    $.ajax({
      method: "GET",
      url: "/api/resources"
    }).done((resources) => {
      // renderResources(resources);
    });
  });
  
// function renderResources(resources) {
//   for(let post of resources) {
//     $("<div>").text(post.title).appendTo($("h2"));
//     $("<div>").text(post.description).appendTo($("body"));
//     $("<div>").text(post.url).appendTo($("body"));
//   }
// }

function createResourceElement(resources) {
    let title = resources[0].title;
    let description = resources[0].description;
    let topic = resources[0].topic;
  
    let $resource = $("<article>").addClass('col-sm-4').html(`
    <div class='col-sm-12'>
      <div class='post-container'>
        <h2 class='post-title'>${title}</h2>
        <p class='desc-container'>
            ${description}
        </p>
        <img src='../styles/bobross.jpeg' class='img-circle post-avatar' alt='icon-boy'>
  
      </div>
    </div>
   `);
    return $resource[0];  
  }
  
  function renderResources(resourcesArray) {
    $('.body-container').prepend(createResourceElement(resourcesArray));
  }
  
  // function getAllPosts(){
  //   return knex.select("*").from("resources")
  //   .then((result) => {
  //       console.log(result);
  //   })
  // }
  
  // getAllPosts();
  
  