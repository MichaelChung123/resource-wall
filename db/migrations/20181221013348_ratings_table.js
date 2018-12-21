
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', table => {
    table.increments();
    table.integer('rating').notNullable();
    table.date('time_stamp');
    table.integer('resources_id');
    table.foreign('resources_id').references('resources.id');
    table.integer('users_id');
    table.foreign('users_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings');
};
