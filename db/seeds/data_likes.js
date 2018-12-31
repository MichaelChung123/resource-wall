
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('likes').insert({
          user_id: 3, 
          resource_id: 1,
          time_stamp: 'today' 
        }),
        knex('likes').insert({
          user_id: 1, 
          resource_id: 2,
          time_stamp: 'yesterday'
        }),
        knex('likes').insert({
          user_id: 2, 
          resource_id: 3,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 2, 
          resource_id: 4,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 3, 
          resource_id: 5,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 1, 
          resource_id: 6,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 3, 
          resource_id: 7,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 1, 
          resource_id: 8,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 2, 
          resource_id: 9,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 2, 
          resource_id: 10,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 3, 
          resource_id: 11,
          time_stamp: 'today'       
        }),
        knex('likes').insert({
          user_id: 1, 
          resource_id: 12,
          time_stamp: 'today'       
        })
      ]);
    });
};
