const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.send('get all users');
});

router.route('/add').post((req, res) => {
  res.send('create user');
});

module.exports = router;
