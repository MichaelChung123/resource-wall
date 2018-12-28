$(() => {
  $.ajax({
    method: "GET",
    url: "/api/profile"
  }).done((users) => {
    createResourceElement(users);
    console.log(users[1].username);
  });
});

function createResourceElement(users) {
  let id = users.id;
  let name = users.name;
  let username = users.username;
  let password = users.password;
  let photo = users.photo;

  let $users = $("header").html(`
    <div class='row'>
    <div class='col-sm-4'>
    <label>${username}</label>
        <img src="../images/bobross.jpeg" class="img-rounded user-avatar" />
    </div>
    <div class='col-sm-3'>
        <h1 class='user-profile'>Bob Ross</h1>
    </div>
    </div>
        `);
  return $users[0];

}

function renderResources(usersArray) {
  $('.body-container').empty();

  $('.body-container').append(createResourceElement(usersArray[1]));
}