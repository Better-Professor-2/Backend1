const db = require("../database/dbConfig.js");



// async function addStudent() {
//   const [id] = await db('students').insert(student, 'id');

//   return db('students')
//     .where({ id })
//     .first();
// }

  const getStudents = () => {
  return db('students');
};

const getStudentById = (id) => {
  return db('students')
    .where({ id: id})
    .first();

    ````````
}

const addStudent = (data) => {
return db('students')
.insert(data)
.then(([id]) => getStudentById(id))

}

async function remove(id) {
  const student = await findById(id);

  await db('students')
    .where({ id })
    .del();

  return student;
}

module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  // findProjectsById,
  remove
};