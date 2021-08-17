var express = require('express');
var router = express.Router();


router.use('/major', require(__dirname + '/major'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
