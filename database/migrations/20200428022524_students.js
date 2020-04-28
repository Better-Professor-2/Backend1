
exports.up = function(knex) {
    return knex.schema.createTable(`students`, tbl => {
        tbl.increments("id");
        tbl.string(`first_name`, 255).notNullable();
        tbl.string(`last_name`, 255).notNullable();
        tbl.string(`phone_number`, 255).notNullable();
        tbl.string(`email`, 255).notNullable();

        tbl
        .integer('professor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('professor')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(`students`);
};
