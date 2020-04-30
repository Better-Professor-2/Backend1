const bcrypt = require("bcryptjs")
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {username: "lambda", password: bcrypt.hashSync('apple')},
        {username: "crimson", password: bcrypt.hashSync('apple')},
        {username: "green",   password: bcrypt.hashSync('apple')},
        
      ]);
    });
};
