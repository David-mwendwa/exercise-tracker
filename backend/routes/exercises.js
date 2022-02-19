const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.send('get all exercises');
});

router.route('/').post((req, res) => {
  res.send('create exercise');
});

module.exports = router;
