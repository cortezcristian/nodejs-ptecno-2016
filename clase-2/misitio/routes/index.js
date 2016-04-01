var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  console.log();
  res.render('index', { title: 'Express', sub: "ABC<b>s</b>" });
});

module.exports = router;
