const express = require('express');

const db = require('./deadlines-model');


const router = express.Router();
router.use(express.json());

const validateId = (req, res, next) => {
    const id = req.params.id;
    db.getDeadlinesById(id)
      .then(deadline => {
        console.log(deadline)
        if (deadline) {
          req.deadline = deadline;
          next();
        } else {
          res.status(404).json({ message: `Deadline ${id} is NOT found` });
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ errorMessage: `Can't  retrieve deadline` });
      });
  };
  
  router.get(`/`, (req, res) => {
    db.getDeadlines()
      .then(deadlines => res.status(200).json(deadlines))
      .catch(error => {
        console.error(error);
        res.status(500).json({ errorMessage: `Not able to retrieve deadlines` });
      });
  });
  
  router.get(`/:id`, validateId, (req, res) => {
    res.status(200).json(req.deadline);
  });
  
  
  
 
  
  router.post(`/`, (req, res) => {
    const deadlineData = req.body;
    if (deadlineData.name) {
      db.addDeadline(deadlineData)
        .then(deadline => res.status(201).json(deadline))
        .catch(error => {
          console.error(error);
          res.status(500).json({ errorMessage: `Not able to add deadline` });
        });
    } else {
      res.status(400).json({ message: `The body must contain some name` });
    }
  });
  
  


module.exports = router;