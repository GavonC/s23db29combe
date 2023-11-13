var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tool', { title: 'search results for tools' });
});

module.exports = router;
