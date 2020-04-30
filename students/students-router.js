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
      .then((students) => res.status(200).json(students))
      .catch((error) => {
        console.error(error);
        res.status(500).json({ errorMessage: `Not able to retrieve students` });
      });
  });
  router.get(`/:id`, validateId, (req, res) => {
    res.status(200).json(req.student);
  });

  router.post("/", (req, res) => {
    const studentsData = req.body;

    db.addStudent(studentsData)

      .then((students) => {
        res.status(201).json({ message: "Successfully created student!" });
      })
      .catch((err) => {
        res.status(500).json({ errorMessage: "Not able to add students" });
      });
  });

  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.remove(id)
      .then((students) => {
        res.status(200).json({
          message: `Successfully deleted student with id of ${id}!`,
        });
      })
      .catch((err) => {
        res.status(500).json({ errorMessage: "Not able to remove student" });
      });

    // res
    //   .status(401)
    //   .json({ message: `There is no student with an id of ${id}` });
  });
});

module.exports = router;
