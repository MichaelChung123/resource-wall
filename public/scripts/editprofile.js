$(() => {
    $.ajax({
      method: "GET",
      url: "/api/editprofile"
    }).done((users) => {
      for(user of users) {
        $("<input type='name' name='updatename'>").attr("placeholder", user.name).appendTo($(".name"));
        $("<input type='username' name='username'>").attr("placeholder", user.username).appendTo($(".username"));
        $("<input type='photo' name='photo'>").attr("placeholder", user.photo).appendTo($(".photo"));
        $("<img>").attr("src", "https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/08/justin-timberlake-writes-book-920x584.jpg").appendTo($("#profile"));
      }
    });
  });
  