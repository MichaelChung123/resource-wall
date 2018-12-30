$(() => {
  $.ajax({
    method: "GET",
    url: "/api/profile"
  }).done((users) => {
    renderResources(users);
    // createResourceElement(users);
    // createCollections(users);
    // createPosts(users);
  });
});

function createResourceElement(users) {
  let id = users.id;
  let name = users.name;
  let username = users.username;
  let password = users.password;
  let photo = users.photo;

  let $users = $("header").html(`
    <div class='row'>
      <div class='col-sm-4'>
        <img src='${photo}' class="img-rounded user-avatar" />
      </div>
      <div class='col-sm-3'>
        <h1 class='user-profile'>${username}</h1>
      </div>
    </div>
        `);
  return $users[0];
}

// function createProfileContent(users) {
//   let content = '';
//   const collections = users.collections;

//   for (const index in collections) {
//     if (index % 2 === 0) {
//       content += `
//         <div class='row content-row'>
//           <div class='col-sm-offset-1 col-sm-2 collection1'>
//             <label>${collections[index].name}</label>
//             <div class='row'>
//               <label>${collections[index].topic}</label>
//             </div>
//             <div class='row'>
//               <label>${users.username}</label>
//             </div>
//           </div>
//           `;
//       if (collections.length === index - 1) {
//         content += `</div>`;
//       }
//     } else {
//       content += `
//         <div class='col-sm-2 collection2'>
//           <label>${collections[index].name}</label>
//           <div class='row'>
//             <label>${collections[index].topic}</label>
//           </div>
//           <div class='row'>
//             <label>${users.username}</label>
//           </div>
//         </div>

//         <div class='col-sm-offset-2 col-sm-2 post1'>
//           <label>${resources[index].title}</label>
//           <div class='row'>
//             <label>${resources[index].topic}</label>
//           </div>
//           <div class='row'>
//             <label>${users.username}</label>
//           </div>
//         </div>
//                     `;

//         content +=`
//           <div class='col-sm-2 post2'>
//             <label>${resources[index].title}</label>
//             <div class='row'>
//               <label>${resources[index].topic}</label>
//             </div>
//             <div class='row'>
//               <label>${users.username}</label>
//             </div>
//           </div >
//             </div >
//         `;


//     }
//   }

//   let $content = $('article').html(content);

//   return $content[0];
// }

function createCollections(users) {
  let content = '';
  const collections = users.collections;

  for (const index in collections) {
    if (index % 2 === 0) {
      content += `
        <div class='col-sm-6'>
          <div class='col-sm-6'>
            <div class='col-sm-offset-1 col-sm-2 collection1 hover-collection'>
              <label>${collections[index].name}</label>
              <div class='row'>
                <label>${collections[index].topic}</label>
              </div>
              <div class='row'>
                <label>${users.username}</label>
              </div>
            </div>
          </div>
        </div>
        `;
      // if (collections.length === index - 1) {
      //   content += `</div>`;
      // }
    } else {
      content += `
        <div class='col-sm-6'>
          <div class='col-sm-2 collection2 hover-collection'>
            <label>${collections[index].name}</label>
            <div class='row'>
              <label>${collections[index].topic}</label>
            </div>
            <div class='row'>
              <label>${users.username}</label>
            </div>
          </div>
        </div>
        `;
    }
  }

  let $content = $('#collection-cols').html(content);

  return $content[0];
}

function createPosts(users) {
  let content = '';
  const resources = users.resources;

  for (const index in resources) {
    if (index % 2 === 0) {
      content += `
        <div class='col-sm-6'>
          <div class='col-sm-6'>
            <div class='col-sm-offset-1 col-sm-2 collection1 hover-post'>
              <label>${resources[index].title}</label>
              <div class='row'>
                <label>${resources[index].topic}</label>
              </div>
              <div class='row'>
                <label>${users.username}</label>
              </div>
            </div>
          </div>
        </div>
        `;
      // if (resources.length === index - 1) {
      //   content += `</div>`;
      // }
    } else {
      content += `
        <div class='col-sm-6'>
          <div class='col-sm-2 collection2 hover-post'>
            <label>${resources[index].title}</label>
            <div class='row'>
              <label>${resources[index].topic}</label>
            </div>
            <div class='row'>
              <label>${users.username}</label>
            </div>
          </div>
        </div>
        `;
    }
  }

  let $content = $('#post-cols').html(content);

  return $content[0];
}


function renderResources(usersArray) {
  $('.body-container').empty();

  $('.body-container').append(createResourceElement(usersArray));
  console.log(usersArray);

  $('.body-container').append(createCollections(usersArray));
  $('.body-container').append(createPosts(usersArray));
}
