var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('shirts', { title: 'tinyshirtco shirts' });
});

module.exports = router;
