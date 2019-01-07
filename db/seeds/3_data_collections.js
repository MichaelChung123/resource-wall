
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
    .then(function () {
      return Promise.all([
        knex('collections').insert({
          // id: '1',
          user_id: 1, 
          name: 'Coding'
        }),
        knex('collections').insert({
          // id: '2',
          user_id: 2, 
          name: 'Lighthouse Resources'
        }),
        knex('collections').insert({
          // id: '3',
          user_id: 3, 
          name: 'Javascript'
        }),
        knex('collections').insert({
          // id: '4',
          user_id: 1, 
          name: 'Coding fundamentals'
        }),
        knex('collections').insert({
          // id: '5',
          user_id: 2, 
          name: 'Web development'
        }),
        knex('collections').insert({
          // id: '6',
          user_id: 3, 
          name: 'My resources'
        })
      ]);
    });
};
