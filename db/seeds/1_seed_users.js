
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
          photo: null
        }),
        knex('users').insert({
          name: 'michael',
          username: 'michael',
          password: 'michael',
          photo: null
        }),
        knex('users').insert({
          name: 'daniel',
          username: 'daniel',
          password: 'daniel',
          photo: null
        })
      ]);
    });
};
