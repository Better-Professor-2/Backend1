const express = require("express");

const db = require("./deadlines-model");

const router = express.Router();
router.use(express.json());

const validateId = (req, res, next) => {
  const id = req.params.id;
  db.getDeadlinesById(id)
    .then(deadline => {
      console.log(deadline);
      if (deadline) {
        req.deadline = deadline;
        next();
      } else {
        res.status(404).json({ message: `Deadline ${id} is NOT found` });
      }
    })
    .catch((error) => {
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
// Create deadline

router.post(`/`, (req, res) => {
  const deadlinesData = req.body;
  
    db.addDeadlines(deadlinesData)
    .then(deadlines => {

      res.status(201).json({message: 'Created deadline successfully'});

    })
      .catch(error => {
        console.error(error);
        res.status(500).json({ errorMessage: `Not able to add deadline` });
      });
  
    // res.status(400).json({ message: `The body must contain some name` });
  
})

//Delete deadline
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find deadline with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete deadline' });
  });
});




module.exports = router;
