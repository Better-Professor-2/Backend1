exports.seed = function (knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("students").insert([
    {
      first_name: "Mickey",
      last_name: "Johnson",
      phone_number: "07877263653",
      email: "mick@yahoo.com",
    },
    {
      first_name: "Charles",
      last_name: "John",
      phone_number: "07877263123",
      email: "charles@yahoo.com",
    },
    {
      first_name: "James",
      last_name: "Brown",
      phone_number: "07877263403",
      email: "james@yahoo.com",
    },
    {
      first_name: "Peter",
      last_name: "Smith",
      phone_number: "07877263659",
      email: "peter@yahoo.com",
    },
    {
      first_name: "Frank",
      last_name: "Jack",
      phone_number: "07877263673",
      email: "frank@yahoo.com",
    }
  ]);
};
