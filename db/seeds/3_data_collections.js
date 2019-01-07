
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
    .then(function () {
      return Promise.all([
        knex('collections').insert({
          user_id: 1, 
          name: 'Coding'
        }),
        knex('collections').insert({
          user_id: 2, 
          name: 'Lighthouse Resources'
        }),
        knex('collections').insert({
          user_id: 3, 
          name: 'Javascript'
        }),
        knex('collections').insert({
          user_id: 2, 
          name: 'Web development'
        }),
        knex('collections').insert({
          user_id: 3, 
          name: 'My resources'
        }),
        knex('collections').insert({
          user_id: 1,
          name: 'test'
        })
      ]);
    });
};
