$(() => {
  $.ajax({
    method: "GET",
    url: "/api/profile"
  }).done((users) => {
    renderResources(users);
    // createResourceElement(users);
    // createProfileContent(users)
    console.log(users[0]);
  });
});

function createResourceElement(users) {
  let id = users[0].id;
  let name = users[0].name;
  let username = users[0].username;
  let password = users[0].password;
  let photo = users[0].photo;

  let $users = $("header").html(`
    <div class='row'>
      <div class='col-sm-4'>
        <img src="../images/bobross.jpeg" class="img-rounded user-avatar" />
      </div>
      <div class='col-sm-3'>
        <h1 class='user-profile'>${username}</h1>
      </div>
    </div>
        `);
  return $users[0];

}

function createProfileContent(users) {
  let name = users.name;
  let username = users.username;
  let password = users.password;
  let photo = users.photo;
  let collectionName = users.name;
  let topic = users.topic;

  let $content = $('article').html(`
    <div class= 'row content-row'>
    <div class='col-sm-offset-1 col-sm-2 collection1'>
      <label>${collectionName}</label>
      <div class='row'>
        <label>${topic}</label>
      </div>
      <div class='row'>
        <label>${username}</label>
      </div>
    </div>
    `)

    return $content[0];
}


function renderResources(usersArray) {
  $('.body-container').empty();

  $('.body-container').append(createResourceElement(usersArray));

  for(let x of usersArray) {
    $('.body-container').append(createProfileContent(x));
  }
}