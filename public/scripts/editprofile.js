$(() => {
    $.ajax({
      method: "GET",
      url: "/api/editprofile"
    }).done((users) => {
      for(user of users) {
        $("<input type='name' name='updatename' required>").attr("placeholder", user.name).appendTo($(".name"));
        $("<input type='username' name='updateusername' required>").attr("placeholder", user.username).appendTo($(".username"));
        $("<input type='photo' name='updatephoto' required>").attr("placeholder", user.photo).appendTo($(".photo"));
        $("<img>").attr("src", user.photo).appendTo($("#profile"));
      }
    });
  });
  