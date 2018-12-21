
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ratings').insert({
          user_id: 1, 
          resource_id: 1,
          rating: 4,
          time_stamp: 'today'
       
        }),
        knex('ratings').insert({
          user_id: 2, 
          resource_id: 2,
          rating: 5,
          time_stamp: 'today'
       
        }),
        knex('ratings').insert({
          user_id: 3, 
          resource_id: 3,
          rating: 3,
          time_stamp: 'yesterday'
       
        })
      ]);
    });
};
