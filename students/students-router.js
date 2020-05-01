const express = require("express");

const db = require("./students-model");

const router = express.Router();
const validateId = (req, res, next) => {
  const id = req.params.id;
  db.getStudentById(id)
    .then((student) => {
      console.log(student);
      if (student) {
        req.student = student;
        next();
      } else {
        res.status(404).json({ message: `Student ${id} is NOT found` });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ errorMessage: `Can't  retrieve student` });
    });
};

router.get("/", (req, res) => {
  db.getStudents()
    .then((students) => res.status(200).json(students))
    .catch((error) => {
      res
        .status(500)
        .json({ message: "There are no students in the database." });
    });

  router.get("/:id", validateId, (req, res) => {
    const { id } = req.params;

    res.status(200).json(req.student);
  });

  router.get(`/`, (req, res) => {
    db.getStudents()
    .then(students => res.status(200).json({message: "Students retrieved "})

  )
      .catch((error) => {
        console.error(error);
        res.status(500).json({ errorMessage: `Not able to retrieve students` });
      });
  });
  router.get(`/:id`, validateId, (req, res) => {
    res.status(200).json(req.student);
  });
//Create Student
  router.post("/", (req, res) => {
    const studentsData = req.body;

    db.addStudent(studentsData)

      .then(student => {
        res.status(201).json({ message: "Successfully created student!" });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ errorMessage: "Not able to add students" });
      });
  });


  // Delete student

  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.remove(id)
      .then(deleted => {
        if(deleted) {
        res.status(200).json({
          message: 'Successfully deleted student'});
        } else {
          res.status(404).json({message: 'Could not find student to delete'})
        }
      
      })
      .catch(err => {
        res.status(500).json({ errorMessage: "Not able to remove student" });
      });

  
    })
});

module.exports = router;
