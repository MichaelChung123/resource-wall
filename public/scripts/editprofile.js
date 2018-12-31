$(() => {
    $.ajax({
      method: "GET",
      url: "/api/editprofile"
    }).done((users) => {
      for(user of users) {
        $("<img class='img-circle'>").attr("src", user.photo).prependTo($(".profile-img"));
        $("<input type='name' name='updatename' required>").attr("value", user.name).appendTo($(".name"));
        $("<input type='username' name='updateusername' required>").attr("value", user.username).appendTo($(".username"));
        $("<input type='photo' name='updatephoto' required>").attr("value", user.photo).appendTo($(".photo"));
      }
    });
  });
  