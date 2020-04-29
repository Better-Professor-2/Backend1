const db = require('../database/dbConfig');

module.exports = {
  getDeadlines,
  getDeadlinesById,
  getDeadlinesByCourseId,
  addDeadlines,
  add,
  remove
}

const  getDeadlines = () => {
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
  return db('deadlines')
    .where({ id })
    .first();
}

const getDeadlinesByCourseId =() => {
  return db('deadlines')
    .where({ course_id })
    .select(
      'id',
      'course_id',
      'description',
      'due_date'
    );
}

function findByStudentId(student_id) {
  return db('deadlines')
    .where({ student_id })
    .select(
      'id',
      'description',
      'due_date'
    );
}



async function add(message) {
  const timestamp = JSON.stringify(new Date());
  const [id] = await db('Messages').insert({ ...message, timestamp }, 'id');

  return db('Messages')
    .where({ id })
    .first();
}

async function remove(id) {
  const message = await findById(id);

  await db('Messages')
    .where({ id })
    .del();

  return message;
}