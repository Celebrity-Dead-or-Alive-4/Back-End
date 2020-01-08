const db = require('./authModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const secret = require("../config/secrets");

router.post('/register', (req, res) => {
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 10);
  creds.password = hash;
  db.addUser(creds)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Unable to add user' });
    });
});

// User Log In

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user.id);
         
        res
          .status(200)
          .json({
            message: `Welcome ${username}`,
            token: token
          });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Error logging in' });
    });
});
  const generateToken = id => {
    return jwt.sign({ id }, secret.jwtSecret, { expiresIn: '1h' });
  };


module.exports = router;