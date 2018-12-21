exports.up = function(knex) {
    return knex.schema.createTable('collection_details', (t) => {
        t.increments();
        t.integer('resource_id').unsigned();
        t.foreign('resource_id').references('resources.id').onDelete('CASCADE');
        t.integer('collection_id').unsigned();
        t.foreign('collection_id').references('collections.id').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('collection_details');
};