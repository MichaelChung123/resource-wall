
exports.up = function(knex, Promise) {
    const createUsersTable = knex.schema.dropTableIfExists('users').createTable('users', table => {
         table.increments();
         table.string('name').notNullable();
         table.string('username').notNullable();
         table.string('password').notNullable();
         table.string('photo');
     }).return();
           
    const createResourcesTable = createUsersTable
        .then(function() {
            return knex.schema.createTable('resources', table => {
                table.increments();
                table.integer('user_id');
                table.foreign('user_id').references('users.id');
                table.string('url').notNullable();
                table.string('title').notNullable();
                table.string('description').notNullable();
                table.string('topic').notNullable();
        });  
    });
    return Promise.all([createUsersTable, createResourcesTable]) 
};
   
exports.down = function(knex, Promise) {
    
    const dropResourcesTable = knex.schema.dropTable('resources').return();
    const dropUsersTable = dropResourcesTable
        .then(() => knex.schema.dropTable('users')); 
    
    return Promise.all([dropResourcesTable, dropUsersTable]);
};
   