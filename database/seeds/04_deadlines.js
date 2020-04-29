
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('deadlines').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {course_title: 'Physical Chemistry', description: 'compulsory course', due_date: '2020-01-06'},
        {course_title: 'Elementary Statistics', description: 'compulsory course', due_date: '2020-15-06'},
        {course_title: 'Medical Microbiology', description: 'compulsory course', due_date: '2020-30-05'},
        {course_title: 'Basic Algebra', description: 'elective course', due_date: '2020-01-05'},
        {course_title: 'Educational Psychology', description: 'compulsory course', due_date: '2020-01-06'},
        {course_title: 'Water Analysis', description: 'laboratory practicals', due_date: '2020-15-05'},
        {course_title: 'Field Survey', description: 'Field Work', due_date: '2020-01-09'},
        
      ]);
    });
};
