
exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
        table.increments();
        table.string('comment').notNullable();
        table.date('time_stamp');
        table.integer('resource_id');
        table.foreign('resource_id').references('resources.id').onDelete('CASCADE');
        table.integer('user_id');
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
