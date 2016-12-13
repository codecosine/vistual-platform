var express = require('express');
var router = express.Router();
var business = require('./business');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/upload/xls', business.calculation);
module.exports = router;
