
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', table => {
    table.increments();
    table.integer('rating').notNullable();
    table.date('time_stamp');
    table.integer('resource_id');
    table.foreign('resource_id').references('resources.id');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings');
};
