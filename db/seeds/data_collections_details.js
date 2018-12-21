
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collection_details').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('collection_details').insert({
          resource_id: 1, 
          collection_id: 1
        }),
        knex('collection_details').insert({
          resource_id: 2, 
          collection_id: 2
        }),
        knex('collection_details').insert({
          resource_id: 3, 
          collection_id: 3
        })
      ]);
    });
};
