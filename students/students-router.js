const express = require('express');

const students = require('./students-model');


const router = express.Router();

router.get('/', (req, res) => {
  students.find()
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

// router.get('/:id/projects', (req, res) => {
//   const { id } = req.params;

//   students.findProjectsById(id)
//     .then(projects => {
//       if (projects && projects.length > 0) {
//         return projects;
//       } else {
//         res.status(401).json({
//           messages: `There are no projects associated with the student id ${id}.`,
//         });
//       }
//     })
//     .then(projects => getDeadlines(projects, req, res))
//     .catch(err => res.send(err));
// });
router.get(`/`, (req, res) => {
  db.getStudents()
    .then(students => res.status(200).json(students))
    .catch(error => {
      console.error(error);
      res.status(500).json({ errorMessage: `Not able to retrieve students` });
    });
});
router.get(`/:id`, validateId, (req, res) => {
  res.status(200).json(req.project);
});

router.post('/', (req, res) => {
  const studentData = req.body;
  if (studentData.name) {
    db.addStudent(studentData)
  
    .then(student => 
      res.status(201).json({message: 'Successfully created student!'}))
      .catch(err => {
        res.status(500).json({errorMessage: 'Not able to add students'})
      })
    } else {
      res.status(400).json({message: 'The body must contain a name'});
    }

  });

    


router.delete('/:id', (req, res) => {
  const { id } = req.params;

  students.remove(id)
    .then(student => {
      if (student) {
        res.status(200).json({
          message: `Successfully deleted student with id of ${id}!`
        
        });
      } else {
        res.status(401).json({message: `There is no student with an id of ${id}`,
        });
      }
    })
    .catch(err => {
      res.status(500).json({errorMessage: 'Not able to remove student'});
});
  });

module.exports = router;