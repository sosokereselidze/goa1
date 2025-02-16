const express = require('express');
const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;