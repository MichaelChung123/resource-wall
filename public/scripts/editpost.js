$(() => {
    $.ajax({
      method: "GET",
      url: "/api/resources-page"
    }).done((resources) => {
      for(resource of resources) {
        $("<input type='text' name='etitle'>").attr("value", resource.title).appendTo($(".etitle"));
        $("<input type='text' name='eurl' required>").attr("value", resource.url).appendTo($(".eurl"));
        $("<input type='text' name='etopic' required>").attr("value", resource.topic).appendTo($(".etopic"));
        $("<input type='text' name='edescription' required>").attr("value", resource.description).appendTo($(".edescription"));
      }
    });
  });
   
