exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("students")
  .truncate()
  .then(function () {
  // Inserts seed entries
  return knex("students").insert([
    {
      id: 1,
      first_name: "Mickey",
      last_name: "Johnson",
      phone_number: "07877263653",
      email: "mick@yahoo.com",
      professor_id: 1,
    },
    {
      id: 2,
      first_name: "Charles",
      last_name: "John",
      phone_number: "07877263123",
      email: "charles@yahoo.com",
      professor_id: 2,
    },
    {
      id: 3,
      first_name: "James",
      last_name: "Brown",
      phone_number: "07877263403",
      email: "james@yahoo.com",
      professor_id: 3,
    },
    {
      id: 4,
      first_name: "Peter",
      last_name: "Smith",
      phone_number: "07877263659",
      email: "peter@yahoo.com",
      professor_id: 2,
    },
    {
      id: 5,
      first_name: "Frank",
      last_name: "Jack",
      phone_number: "07877263673",
      email: "frank@yahoo.com",
      professor_id: 3,
    }
  ]);
});
};
