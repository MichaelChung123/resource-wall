exports.up = function(knex) {
    return knex.schema.createTable('collections', (t) => {
        t.increments();
        t.string('name').notNull();
        t.integer('user_id').unsigned();
        t.foreign('user_id').references('users.id').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('collections');
};
