
exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({
          user_id: '1',
          url: 'https://www.tutorialspoint.com/javascript',
          title: 'javascript',
          description: 'javascript for beginners',
          topic: 'javascript, beginner, web developer'
        }),
        knex('resources').insert({
          user_id: '2',
          url: 'https://www.w3schools.com/css/',
          title: 'css',
          description: 'css for beginners',
          topic: 'css, beginner, web developer'
        }),
        knex('resources').insert({
          user_id: '3',
          url: 'https://www.w3schools.com/nodejs/nodejs_intro.asp',
          title: 'node.js',
          description: 'node for beginners',
          topic: 'node, javascript'
          
        })
      ]);
    });
};
