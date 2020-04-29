const db = require("../database/dbConfig.js");

module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  // findProjectsById,
  remove
}

async function addStudent() {
  const [id] = await db('students').insert(student, 'id');

  return db('students')
    .where({ id })
    .first();
}

function getStudents() {
  return db('students');
}

function getStudentById(id) {
  return db('students')
    .where({ id })
    .first();
    ````````
}

// function findProjectsById(id) {
//   return db('Projects AS p')
//     .join('Students&Projects AS s&p', 's&p.project_id', 'p.id')
//     .join('Students AS s', 's.id', 's&p.student_id')
//     .where({ 's.id': id })
//     .select('p.id', 'p.name');
// }

async function remove(id) {
  const student = await findById(id);

  await db('students')
    .where({ id })
    .del();

  return student;
}