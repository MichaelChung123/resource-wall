$(() => {
    $.ajax({
      method: "GET",
      url: "/api/users"
    }).done((users) => {
      for(user of users) {
        // $("<input>").attr("placeholder", user.name);
        $("<div>").text(user.name).appendTo($("body"));

      }
    });
  });
  