const router = require('express').Router();
const authorization = require('../auth/authenticate-middleware');
const Users = require('../user/userModel');

//Get Users
router.get('/', authorization, (req, res) => {
    Users.find()
    .then(getusers => {
      res.json(getusers);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get users' });
    });
  });

  //Get Users by ID
  router.get('/:id', authorization, (req, res) => {
    const { id } = req.params;
  
    Users.findById(id)
    .then(userid => {
      if (userid) {
        res.json(userid);
      } else {
        res.status(404).json({ message: `There is no user with the id of ${id}` })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get user' });
    });
  });

// Update User By Id
router.put('/:id', authorization, (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Users.findById(id)
    .then(updateuser => {
      if (updateuser) {
        Users.update(changes, id)
        .then(updatedUser => {
          res.json(updatedUser);
        });
      } else {
        res.status(404).json({ message: `There is no user with the id of ${id}` });
      }
    })
    .catch (err => {
      res.status(500).json({ message: `Internal Server Error`, error });
    });
  });

  // Delete by id
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
  });
  
  module.exports = router;