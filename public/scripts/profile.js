$(() => {
  $.ajax({
    method: "GET",
    url: "/api/profile"
  }).done((users) => {
    renderResources(users);
  });
});

function createUserProfile(users) {
  let name = users.name;
  let photo = users.photo;

  let $users = $("header").html(`
    <div class='row'>
      <div class='col-sm-4'>
        <img src='${photo}' class="img-circle user-avatar" />
      </div>
      <div class='col-sm-3'>
        <h1 class='user-profile'>${name}</h1>
      </div>
    </div>
        `);
  return $users[0];
}

function createCollections(users) {
  let content = '';
  const collections = users.collections;

  for (const index in collections) {
    const collection = collections[index];
    if (collection % 2 === 0) {
      content += `
        <div class='col-sm-6'>
          <div class='col-sm-6'>
            <a href='/${users.username}/${collection.name}' class='col-sm-offset-1 col-sm-2 card1 hover-card'>
              <div class='collection-title'>
              <label>${collection.name}</label>
              </div>
            </a>
          </div>
        </div>
        `;
    } else {
      content += `
        <div class='col-sm-6'>
          <a href='/${users.username}/${collection.name}' class='col-sm-2 card2 hover-card'>
          <div class='collection-title'>  
          <label>${collection.name}</label>
          </div>
          </a>
        </div>
        `;
    }
  }

  let $content = $('#collection-cols').html(content);

  return $content[0];
}


function renderResources(usersArray) {
  $('.body-container').empty();

  $('.body-container').append(createUserProfile(usersArray));
  $('.body-container').append(createCollections(usersArray));
}
