
exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
        table.increments();
        table.string('comment').notNullable();
        table.date('time_stamp');
        table.integer('resources_id');
        table.foreign('resources_id').references('resources.id').onDelete('CASCADE');
        table.integer('users_id');
        table.foreign('users_id').references('users.id').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
