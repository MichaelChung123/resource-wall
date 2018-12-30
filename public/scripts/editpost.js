$(() => {
    $.ajax({
      method: "GET",
      url: "/api/resources-page"
    }).done((resources) => {
      for(resource of resources) {
        $("<input type='text' name='etitle'>").attr("value", resource.title).appendTo($(".title"));
        $("<input type='username' name='updateusername' required>").attr("value", user.username).appendTo($(".username"));
        $("<input type='photo' name='updatephoto' required>").attr("value", user.photo).appendTo($(".photo"));
        $("<img>").attr("src", user.photo).appendTo($("#profile"));
      }
    });
  });
  