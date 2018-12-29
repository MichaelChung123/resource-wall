
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          name: 'neg',
          username: 'neg',
          password: 'neg',
          photo: 'https://pbs.twimg.com/profile_images/523916705253187584/h6wvQGHj_400x400.png'
        }),
        knex('users').insert({
          name: 'michael',
          username: 'michael',
          password: 'michael',
          photo: 'https://pbs.twimg.com/profile_images/378800000328970347/40e96c650dad499b060a4f24ddc68c6e_400x400.png'
        }),
        knex('users').insert({
          name: 'daniel',
          username: 'daniel',
          password: 'daniel',
          photo: 'https://pbs.twimg.com/profile_images/378800000328970347/40e96c650dad499b060a4f24ddc68c6e_400x400.png'
        })
      ]);
    });
};
