$(() => {
    $.ajax({
      method: "GET",
      url: "/api/profilelikes"
    }).done((resources) => {
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
                <a href='/${resource.id}' class='col-sm-offset-1 col-sm-2 like1 hover-card'>
                    <div class='collection-title'>
                        <label>${resources.title}</label>
                    </div>
                    <div class='row card-topic'>
                    <label>${resource.topic}</label>
                    </div>
                </a>
                </div>
            </div>
            `;
        } else {
            content += `
            <div class='col-sm-6'>
                <a href='/${resource.id}' class='col-sm-2 like2 hover-card'>
                <div class='collection-title'>
                    <label>${resource.title}</label>
                </div>
                <div class='row card-topic'>
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

  