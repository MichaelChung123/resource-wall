
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
        }),
        knex('resources').insert({
          user_id: '1',
          url: 'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0',
          title: 'functional programming',
          description: 'functional programming ins javascript',
          topic: 'javascript, functional programming, web developer'
        }),
        knex('resources').insert({
          user_id: '2',
          url: 'https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners',
          title: 'github',
          description: 'github for beginners',
          topic: 'github, beginner, git'
        }),
        knex('resources').insert({
          user_id: '3',
          url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
          title: 'git',
          description: 'git version control system',
          topic: 'git, vcs, beginner for git'
        }),
        knex('resources').insert({
          user_id: '1',
          url: 'https://scotch.io/tutorials/javascript-promises-for-dummies',
          title: 'Promise in Javascript',
          description: 'How promises work and methods to use them',
          topic: 'javascript, promise, callback'
        }),
        knex('resources').insert({
          user_id: '2',
          url: 'https://www.youtube.com/watch?v=FYXpOjwYzcs',
          title: 'Functional programming',
          description: 'functional programming in javascript for beginners',
          topic: 'functional programming, beginner, pure function'
        }),
        knex('resources').insert({
          user_id: '3',
          url: 'https://javascript.info/async',
          title: 'async await',
          description: 'ES6 async await',
          topic: 'promise, async, await'
        }),
        knex('resources').insert({
          user_id: '1',
          url: 'https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546',
          title: 'psql cheat sheet',
          description: 'basic commands for pqsql db',
          topic: 'psql, database, cheatsheet'
        }),
        knex('resources').insert({
          user_id: '2',
          url: 'https://medium.com/compass-true-north/swift-smells-17246905d1d9',
          title: 'code smell',
          description: 'code cleanliness, how to write better code',
          topic: 'code smell, cleancode'
        }),
        knex('resources').insert({
          user_id: '3',
          url: 'https://www.youtube.com/watch?v=568g8hxJJp4&t=534s',
          title: 'async await tutorial video',
          description: 'ES6 async await',
          topic: 'promise, async, await'
        }),
      ]);
    });
};
