exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Daniel'}),
        knex('users').insert({id: 2, name: 'Neg'}),
        knex('users').insert({id: 3, name: 'Michael'})
      ]);
    });
};
