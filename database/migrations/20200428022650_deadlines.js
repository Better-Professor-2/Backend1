
exports.up = function(knex) {
    return knex.schema.createTable(`deadlines`, tbl => {
        tbl.increments("id");
        tbl.string(`deadline`, 255).notNullable();
        tbl.string(`type`, 255).notNullable();
        tbl.string(`name`, 255).notNullable();
        tbl.text('description').notNullable();
        tbl.text('notification_message').notNullable();
        tbl.string('notification_time').notNullable();
          
        

        tbl
          .integer(`student_id`)
          .unsigned()
          .notNullable()
          .references(`id`)
          .inTable(`deadlines`)
          .onDelete(`CASCADE`)
          .onUpdate(`CASCADE`);
      });

  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(`deadlines`);
  
};
