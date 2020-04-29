const bcrypt = require("bcryptjs");
exports.seed = function (knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("professors").insert([
    {
      first_name: "Harry",
      last_name: "Livingstone",
      email: "harry@gmail.com",
      password: bcrypt.hashSync("lion"),
    },
    {
      first_name: "Mary",
      last_name: "Little",
      email: "mary@gmail.com",
      password: bcrypt.hashSync("purple"),
    },
    {
      first_name: "Janice",
      last_name: "Callback",
      email: "janice@gmail.com",
      password: bcrypt.hashSync("yellow"),
    },
  ]);
};
