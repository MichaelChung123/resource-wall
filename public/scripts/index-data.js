$(() => {
  $.ajax({
    method: "GET",
    url: "/api/index-data"
  }).done((indexData) => {
    renderResources(indexData);
    console.log(indexData);
  });
});

function createResourceElement(resources) {
  let title = resources.title;
  let description = resources.description;
  let topic = resources.topic.replace(/,/g, " ");
  let name = resources.name;

  let $resource = $("<article>").addClass('col-sm-4').html(`
          <div class='col-sm-12'>
          <div class='post-container'>
            <h2 class='post-title'>${title}</h2>
            <p class='desc-container'>
                ${description}
            </p>
            <img src="../styles/bobross.jpeg" class="img-circle post-avatar" alt="icon-boy">
            <label>${name}</label>
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

function renderResources(resourcesArray) {
  $('.body-container').empty();

  for (let x of resourcesArray) {
    $('.body-container').prepend(createResourceElement(x));
  }
  
  // $(".post-container").on("mouseenter", function (event) {
  //   $(".post-container").addClass('post-container-mouseenter');
  // });
  // $(".post-container").on("mouseleave", function (event) {
  //   $(".post-container").removeClass('post-container-mouseenter');
  // });
}