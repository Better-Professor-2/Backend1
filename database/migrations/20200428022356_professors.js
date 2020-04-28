
exports.up = function(knex) {
    return knex.schema.createTable('professors', tbl =>{
        tbl.increments("id");
        tbl.string("first_name", 255).notNullable();
        tbl.string("last_name", 255).notNullable();
        tbl.string("email", 255).notNullable();
        tbl.string("password", 255).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(`professors`);
  
};
