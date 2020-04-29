const bcrypt = require("bcryptjs");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("professors")
    .truncate()
    .then(function () {

  // Inserts seed entries
  return knex("professors").insert([
    
    {
      id: 1,
      first_name: "Harry",
      last_name: "Livingstone",
      email: "harry@gmail.com",
      password: bcrypt.hashSync("lion"),
    },
    {
      id: 2,
      first_name: "Mary",
      last_name: "Little",
      email: "mary@gmail.com",
      password: bcrypt.hashSync("purple"),
    },
    {id: 3,
      first_name: "Janice",
      last_name: "Callback",
      email: "janice@gmail.com",
      password: bcrypt.hashSync("yellow"),
    },
  
  ]);

});

};

