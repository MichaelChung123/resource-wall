
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          name: 'Negar',
          username: 'neg',
          password: 'neg',
          photo: 'https://s3.amazonaws.com/lighthouse-compass2/uploads/avatar/custom_avatar/2633/thumb_IMG_8787.jpg'
        }),
        knex('users').insert({
          name: 'Michael',
          username: 'michael',
          password: 'michael',
          photo: 'https://s3.amazonaws.com/lighthouse-compass2/uploads/avatar/custom_avatar/2742/thumb_portrait.jpg'
        }),
        knex('users').insert({
          name: 'Daniel',
          username: 'daniel',
          password: 'daniel',
          photo: 'https://s3.amazonaws.com/lighthouse-compass2/uploads/avatar/custom_avatar/2540/thumb_36A4176B-5AF6-4A7F-9F54-8CEE17C14C24.jpeg'
        })
      ]);
    });
};
