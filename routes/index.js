const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile('./views/index.html');
});

module.exports = router;
