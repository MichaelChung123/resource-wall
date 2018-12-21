
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({
          user_id: 1, 
          resource_id: 1,
          comment: 'hello im comment 1',
          time_stamp: 'today'
        }),
        knex('comments').insert({
          user_id: 2, 
          resource_id: 2,
          comment: 'hello im comment 2',
          time_stamp: 'yesterday'
       
        }),
        knex('comments').insert({
          user_id: 3, 
          resource_id: 3,
          comment: 'hello im comment 3',
          time_stamp: 'today'
       
        })
      ]);
    });
};
