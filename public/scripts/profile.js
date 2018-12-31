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
    if (index % 2 === 0) {
      content += `
        <div class='col-sm-6'>
          <div class='col-sm-6'>
            <a href='/${users.username}/${collections[index].name}' class='col-sm-offset-1 col-sm-2 collection1 hover-collection'>
              <label>${collections[index].name}</label>
            </a>
          </div>
        </div>
        `;
    } else {
      content += `
        <div class='col-sm-6'>
          <a href='/${users.username}/${collections[index].name}' class='col-sm-2 collection2 hover-collection'>
            <label>${collections[index].name}</label>
          </a>
        </div>
        `;
    }
  }

  let $content = $('#collection-cols').html(content);

  return $content[0];
}

function createPosts(users) {
  console.log(users);
  let content = '';
  const resources = users.resources;

  for (const index in resources) {
    if (index % 2 === 0) {
      content += `
        <div class='col-sm-6'>
          <div class='col-sm-6'>
            <a href='/${resources[index].id}' class='col-sm-offset-1 col-sm-2 collection1 hover-post'>
              <label>${resources[index].title}</label>
              <div class='row'>
                <label>${resources[index].topic}</label>
              </div>
              <div class='row'>
                <label>${users.username}</label>
              </div>
            </a>
          </div>
        </div>
        `;
    } else {
      content += `
        <div class='col-sm-6'>
          <a href='/${resources[index].id}' class='col-sm-2 collection2 hover-post'>
            <label>${resources[index].title}</label>
            <div class='row'>
              <label>${resources[index].topic}</label>
            </div>
            <div class='row'>
              <label>${users.username}</label>
            </div>
          </a>
        </div>
        `;
    }
  }

  let $content = $('#post-cols').html(content);

  return $content[0];
}


function renderResources(usersArray) {
  $('.body-container').empty();

  $('.body-container').append(createUserProfile(usersArray));
  $('.body-container').append(createCollections(usersArray));
  $('.body-container').append(createPosts(usersArray));
}
