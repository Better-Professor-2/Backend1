const db = require("../database/dbConfig");

const getDeadlines = () => {
  return db("deadlines");
};

const getDeadlinesById = (id) => {
  return db(`deadlines`)
    .where({ id: id })
    .first()
    .then((deadline) => {
      return { ...deadline };
    });
};

function findById(id) {
  return db("deadlines").where({ id }).first();
}

const getDeadlinesByCourseId = () => {
  return db("deadlines")
    .where({ course_id })
    .select("id", "course_id", "description", "due_date");
};

const addDeadlines = (data) => {
  return db("deadlines")
    .insert(data)
    .then(([id]) => getDeadlinesById(id));
};

// async function add(deadline) {
//   const timestamp = JSON.stringify(new Date());
//   const [id] = await db('Messages').insert({ ...message, timestamp }, 'id');

//   return db('deadlines')
//     .where({ id })
//     .first();
// }

function remove(id) {
  return db("deadlines").where({ id }).del();
}

module.exports = {
  getDeadlines,
  getDeadlinesById,
  getDeadlinesByCourseId,
  addDeadlines,
  remove,
};
