var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/send-contact', function(req, res, next) {
  res.render('sent', {qs: req.body});
});

module.exports = router;
