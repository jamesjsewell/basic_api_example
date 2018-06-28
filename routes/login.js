var express = require('express');
var router = express.Router();

/* log user in */
router.get('/', function(req, res, next) {
  res.send('this will log a user in');
});

module.exports = router;
