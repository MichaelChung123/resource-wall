$(() => {
    $.ajax({
      method: "GET",
      url: "/api/profile"
    }).done((users) => {
      for(user of users) {
        $("<div>").text(user.name).appendTo($("body"));
      }
    });
  });
  
  