$(() => {
  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    for(post of resources) {
      $("<div>").text(post.title).appendTo($("body"));
      $("<div>").text(post.description).appendTo($("body"));
      $("<div>").text(post.url).appendTo($("body"));
      // $("<div>").text(post.title).appendTo($("body"));
    }
  });;
});

// function getAllPosts(){
//   return knex.select("*").from("resources")
//   .then((result) => {
//       console.log(result);
//   })
// }

// getAllPosts();

