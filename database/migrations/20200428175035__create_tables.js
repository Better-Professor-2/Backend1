exports.up = function (knex) {
  return knex.schema
    .createTable("Users", tbl=> {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("professors", tbl => {
      tbl.increments("id");
      tbl.string("first_name", 255).notNullable();
      tbl.string("last_name", 255).notNullable();
      tbl.string("email", 255).notNullable();
      tbl.string("password", 255).notNullable();
    })
    .createTable(`students`, tbl => {
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
        .inTable("students")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable(`deadlines`, tbl => {
      tbl.increments("id");
      tbl.string(`course_title`, 255).notNullable();
      tbl.text("description").notNullable();
      tbl.text("due_date").notNullable();

      tbl
        .integer(`student_id`)
        .unsigned()
        .notNullable()
        .references(`id`)
        .inTable(`deadlines`)
        .onDelete(`CASCADE`)
        .onUpdate(`CASCADE`);
    })

    // .createTable("projects", tbl => {
    //   tbl.increments();
    //   tbl.string("name", 128).notNullable();

    //   tbl
    //     .integer("student_id")
    //     .unsigned()
    //     .notNullable()
    //     .references("id")
    //     .inTable("");
    //   tbl
    //     .integer("project_id")
    //     .unsigned()
    //     .notNullable()
    //     .references("id")
    //     .inTable("projects");
      
    // });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Users")
    .dropTableIfExists("professors")
    .dropTableIfExists("students")
    .dropTableIfExists("deadlines")
    // .dropTableIfExists("projects");
};
