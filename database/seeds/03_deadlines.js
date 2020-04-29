exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("deadlines")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("deadlines").insert([
        {
          id: 1,
          course_title: "Physical Chemistry",
          description: "compulsory course",
          due_date: "01-06-2020",
          student_id: 1,
        },
        {
          id: 2,
          course_title: "Elementary Statistics",
          description: "compulsory course",
          due_date: "01-09-2020",
          student_id: 3
        },
        {
          id: 3,
          course_title: "Medical Microbiology",
          description: "compulsory course",
          due_date: "30-06-2020",
          student_id:4,
        },
        {
          id: 4,
          course_title: "Basic Algebra",
          description: "elective course",
          due_date: "01-06-2020",
          student_id: 2
        },
        {
          id: 5,
          course_title: "Educational Psychology",
          description: "compulsory course",
          due_date: "15-05-2020",
          student_id: 5
        },
        {
          id: 6,
          course_title: "Water Analysis",
          description: "laboratory practicals",
          due_date: "15-05-2020",
          student_id: 3
        },
        {
          id: 7,
          course_title: "Field Survey",
          description: "Field Work",
          due_date: "01-09-2020",
          student_id: 2,
        },
        {
          id: 8,
          course_title: "End of Course Assessment",
          description: "Compulsory Course",
          due_date: "01-09-2020",
          student_id: 2,
        },
        {
          id: 9,
          course_title: "Indusrial Experience Report",
          description: "Compulsory",
          due_date: "01-09-2020",
          student_id: 2,
        },
        {
          id: 10,
          course_title: "Principles of Management",
          description: "Elective",
          due_date: "01-09-2020",
          student_id: 2,
        },
      ]);
    });
};
