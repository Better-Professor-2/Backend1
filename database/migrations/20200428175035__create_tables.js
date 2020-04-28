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
        .inTable("students")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable(`deadlines`, (tbl) => {
      tbl.increments("id");
      tbl.string(`deadline`, 255).notNullable();
      tbl.string(`type`, 255).notNullable();
      tbl.string(`name`, 255).notNullable();
      tbl.text("description").notNullable();
      tbl.text("notification_message").notNullable();
      tbl.string("notification_time").notNullable();

      tbl
        .integer(`student_id`)
        .unsigned()
        .notNullable()
        .references(`id`)
        .inTable(`deadlines`)
        .onDelete(`CASCADE`)
        .onUpdate(`CASCADE`);
    })

    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();

      tbl
        .integer("student_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects");
      table.primary(["student_id", "project_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Users")
    .dropTableIfExists("professors")
    .dropTableIfExists("students")
    .dropTableIfExists("deadlines")
    .dropTableIfExists("projects");
};
