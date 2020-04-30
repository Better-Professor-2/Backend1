const express = require("express");

const db = require("./deadlines-model");

const router = express.Router();
router.use(express.json());

const validateId = (req, res, next) => {
  const id = req.params.id;
  db.getDeadlinesById(id)
    .then((deadline) => {
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
    .then((deadlines) => res.status(200).json(deadlines))
    .catch(error => {
      console.error(error);
      res.status(500).json({ errorMessage: `Not able to retrieve deadlines` });
    });
});

router.get(`/:id`, validateId, (req, res) => {
  res.status(200).json(req.deadline);
});

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


// router.post('/', (req, res) => {
//   db.addDeadlines('deadlines').insert(req.body)
//   .then(ids => {
//     const id = ids[0];

//     db('deadlines')
//       .where({ id })
//       .first()
//     .then(animal => {
//       res.status(201).json(deadline);
//     });
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

module.exports = router;
