$(() => {
  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {

  });
});