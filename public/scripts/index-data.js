$(() => {
  $.ajax({
    method: "GET",
    url: "/api/index-data"
  }).done((indexData) => {
    renderResources(indexData);
  });
});

function createResourceElement(users) {
  let resource = '';

  // let topic = resources.topic.replace(/,/g, " ");
  for (const index in users) {
    resource += `
  <div class='col-sm-4'>
  <a href='/${users[index].id}'>
  <div class='post-container'>
    <div class='row post-top'>
      <div class='col-sm-12'>
        <img src="${users[index].photo}" class="img-circle post-avatar" alt="icon-boy" />
        <label>${users[index].name}</label>
      </div>
    </div>
    <div class='row post-mid'>
      <div class='col-sm-12'>
        <label>${users[index].title}</label>
        <p>${users[index].description}</p>
      </div>
    </div>
    <div class='row post-bot'>
      <div class='col-sm-12'>
        <label>${users[index].topic}</label>
      </div>
    </div>
    <div class='row post-footer'>
        <div class='icon-container'>
            <i class="index-icons fas fa-heart"></i>

            <i class="index-icons fas fa-comment"></i>

            <i class="index-icons fas fa-thumbs-up"></i>

        </div>
    </div>
  </div>
  </a>
</div>
      `;
  }
  let $resource = $('#index-content').html(resource);

  return $resource[0];
}

function renderResources(resourcesArray) {
  $('.body-container').append(createResourceElement(resourcesArray));

}