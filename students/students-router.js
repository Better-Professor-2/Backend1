const express = require('express');

const students = require('./students-model');


const router = express.Router();

router.get('/', (req, res) => {
  Students.find()
    .then(students => {
      if (students && students.length > 1) {
        res.status(200).json(students);
      } else {
        res.status(401).json({
          message: 'There are no students in the database.'
        });
      }
    })
    .catch(err =>res.send (err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  students.findById(id)
    .then(student => {
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(401).json({
          message: `There is no student with an id of ${id}.`,
        });
      }
    })
    .catch(err => res.send(err));
});

router.get('/:id/projects', (req, res) => {
  const { id } = req.params;

  students.findProjectsById(id)
    .then(projects => {
      if (projects && projects.length > 0) {
        return projects;
      } else {
        res.status(401).json({
          messages: `There are no projects associated with the student id ${id}.`,
        });
      }
    })
    .then(projects => getDeadlines(projects, req, res))
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  students.add(req.body)
    .then(student => {
      res.status(201).json({
        message: 'Successfully created student!',
        student,
      });
    })
    .catch(err => res.send(err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  students.remove(id)
    .then(student => {
      if (student) {
        res.status(200).json({
          message: `Successfully deleted student with id of ${id}!`,
          student,
        });
      } else {
        res.status(401).json({
          message: `There is no student with an id of ${id}`,
        });
      }
    })
    .catch(err => res.send(err));
})

module.exports = router;