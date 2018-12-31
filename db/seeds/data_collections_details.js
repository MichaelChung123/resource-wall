
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
        }),
        knex('collection_details').insert({
          resource_id: 4, 
          collection_id: 1
        }),
        knex('collection_details').insert({
          resource_id: 5, 
          collection_id: 2
        }),
        knex('collection_details').insert({
          resource_id: 6, 
          collection_id: 3
        }),
        knex('collection_details').insert({
          resource_id: 7, 
          collection_id: 4
        }),
        knex('collection_details').insert({
          resource_id: 8, 
          collection_id: 5
        }),
        knex('collection_details').insert({
          resource_id: 9, 
          collection_id: 6
        }),
        knex('collection_details').insert({
          resource_id: 10, 
          collection_id: 1
        }),
        knex('collection_details').insert({
          resource_id: 11, 
          collection_id: 2
        }),
        knex('collection_details').insert({
          resource_id: 12, 
          collection_id: 3
        })
      ]);
    });
};
 