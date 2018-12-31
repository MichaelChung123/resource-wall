$(() => {
    $.ajax({
      method: "GET",
      url: "/api/profilelikes"
    }).done((resources) => {
        console.log("This is my result: ", resources[0]);
        $('.body-container').append(createLikes(resources));
    });
  });

  
  function createLikes(resources) {
    let content = '';

    for (const index in resources) {
        const resource = resources[index];
        if (resource % 2 === 0) {
            content += `
            <div class='col-sm-6'>
                <div class='col-sm-6'>
                <a href='/${resource.id}' class='col-sm-offset-1 col-sm-2 collection1 hover-post'>
                    <label>${resources.title}</label>
                    <div class='row'>
                    <label>${resource.topic}</label>
                    </div>
                </a>
                </div>
            </div>
            `;
        } else {
            content += `
            <div class='col-sm-6'>
                <a href='/${resource.id}' class='col-sm-2 collection2 hover-post'>
                <label>${resource.title}</label>
                <div class='row'>
                    <label>${resource.topic}</label>
                </div>

                </a>
            </div>
            `;
        }
        }
    
        let $content = $('#post-cols').html(content);
    
        return $content[0];
  }

  