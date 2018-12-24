$(() => {
    $.ajax({
      method: "GET",
      url: "/api/editprofile"
    }).done((users) => {
      for(user of users) {
        $("<input type='name' name='updatename'>").attr("placeholder", user.name).appendTo($(".name"));
        $("<input type='username' name='updateusername'>").attr("placeholder", user.username).appendTo($(".username"));
        $("<input type='photo' name='updatephoto'>").attr("placeholder", user.photo).appendTo($(".photo"));
        $("<img>").attr("src", user.photo).appendTo($("#profile"));
      }
    });
  });
  