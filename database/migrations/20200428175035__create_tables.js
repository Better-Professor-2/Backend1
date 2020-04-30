exports.up = function (knex) {
  return knex.schema
    .createTable("Users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
    })

    .createTable("professors", (tbl) => {
      tbl.increments("id");
      tbl.string("first_name", 255).notNullable();
      tbl.string("last_name", 255).notNullable();
      tbl.string("email", 255).notNullable();
      tbl.string("password", 255).notNullable();
    })
    .createTable(`students`, (tbl) => {
      tbl.increments("id");
      tbl.string(`first_name`, 255).notNullable();
      tbl.string(`last_name`, 255).notNullable();
      tbl.string(`phone_number`, 255).notNullable();
      tbl.string(`email`, 255).notNullable();

      tbl
        .integer("professor_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("professors")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable(`deadlines`, (tbl) => {
      tbl.increments("id");
      tbl.string(`due_date`, 255).notNullable();
      tbl.text("course_title").notNullable();
      tbl.text("description").notNullable();

      tbl
        .integer(`student_id`)
        .unsigned()
        .notNullable()
        .references(`id`)
        .inTable(`students`)
        .onDelete(`CASCADE`)
        .onUpdate(`CASCADE`);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Users")
    .dropTableIfExists("professors")
    .dropTableIfExists("students")
    .dropTableIfExists("deadlines");
};
