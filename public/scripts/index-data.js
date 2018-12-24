$(() => {
    $.ajax({
      method: "GET",
      url: "/api/index-data"
    }).done((indexData) => {
      renderResources(indexData);
    });
  });

function createResourceElement(resources) {
    for(let resource of resources) {
      if(resource) {
        let title = resources[0].title;
        let description = resources[0].description;
        let topic = resources[0].topic;

      //Issues seperating comma seperated string from the db.
      let topicArray = [];
      let topicVar = "";
      let i=0;

      for(let x of topic) {
        if(x === ",") {
          topicArray[i] === topicVar;
          console.log(topicVar);
          topicVar = "";
          i++;
        } else {
          topicVar += x;
        }
      }

      let $resource = $("<article>").addClass('col-sm-4').html(`
        <div class='col-sm-12'>
        <div class='post-container'>
          <h2 class='post-title'>${title}</h2>
          <p class='desc-container'>
              ${description}
          </p>
          <img src="../styles/bobross.jpeg" class="img-circle post-avatar" alt="icon-boy">
          <label>Username</label>
          <footer class="post-footer">
            <div class='col-sm-2'>
              <label>${topic}</label>
            </div>
            <div class='icon-container'>
              <div class='col-sm-1'>
                <i class="far fa-heart"></i>
              </div>

              <div class='col-sm-1'>
                  <i class="far fa-comment"></i>
              </div>

              <div class='col-sm-6'>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
              </div>

            </div>
          </footer>
        </div>
      </div>
     `);

        return $resource[0];  
      }
    }
  }
  
  function renderResources(resourcesArray) {
    $('.body-container').prepend(createResourceElement(resourcesArray));
  }

  $(".post-container").on("mouseenter", function(event) {
    console.log("mousing over element");
    $(".post-container").addClass('post-container-mouseenter');
  });
  
  // function renderResources(resources) {
//   for(let post of resources) {
//     $("<div>").text(post.title).appendTo($("h2"));
//     $("<div>").text(post.description).appendTo($("body"));
//     $("<div>").text(post.url).appendTo($("body"));
//   }
// }