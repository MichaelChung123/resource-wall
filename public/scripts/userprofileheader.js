$(() => {
    $.ajax({
      method: "GET",
      url: "/api/userprofileheader.js"
    }).done((user) => {
      createResourceElement(user);
    });
  });
  
  function createResourceElement(user) {
    let name = user.name;
    let photo = user.photo;
  
    let $users = $("header").html(`
      <div class='row'>
      <div class='col-sm-4'>
          <img src="${photo}" class="img-rounded user-avatar" />
      </div>
      <div class='col-sm-3'>
          <h1 class='user-profile'>${name}</h1>
      </div>
      </div>
          `);
    return $users;
  
  }
  
  function renderResources(usersArray) {
    $('.body-container').empty();
  
    $('.body-container').append(createResourceElement(usersArray[1]));
  }