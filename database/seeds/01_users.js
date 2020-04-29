const bcrypt = require("bcryptjs");
exports.seed = function (knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("Users").insert([
    { username: "admin", password: bcrypt.hashSync("grape") },
    { username: "admin1", password: bcrypt.hashSync("12345") },
    { username: "admin2", password: bcrypt.hashSync("orange") },
  ]);
};
