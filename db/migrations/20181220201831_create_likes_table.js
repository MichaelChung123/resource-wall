exports.up = function(knex) {
    return knex.schema.createTable('likes', (t) => {
        t.increments();
        t.timestamp('time_stamp').defaultTo(knex.fn.now());
        t.integer('resource_id');
        t.foreign('resource_id').references('resources.id').onDelete('CASCADE');
        t.integer('user_id');
        t.foreign('user_id').references('users.id').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('likes');
};
