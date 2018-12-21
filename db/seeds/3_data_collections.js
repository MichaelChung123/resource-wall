
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
    .then(function () {
      return Promise.all([
        knex('collections').insert({
          user_id: 1, 
          name: 'mycollection1'
        }),
        knex('collections').insert({
          user_id: 2, 
          name: 'mycollection2'
        }),
        knex('collections').insert({
          user_id: 3, 
          name: 'mycollection3'
        })
      ]);
    });
};
