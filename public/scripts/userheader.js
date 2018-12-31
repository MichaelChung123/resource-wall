$(() => {
    $.ajax({
      method: "GET",
      url: "/api/userheader"
    }).done((users) => {
      for (user of users) {
        $("<img class='img-circle user-avatar'>").attr("src", user.photo).appendTo($(".user-div"));
        $("<h3 class='user-header-name'>").text(user.name).appendTo($(".user-div"));
      }
    });
  });
