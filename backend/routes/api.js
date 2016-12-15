let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let config = require('../config');
var formidable = require('formidable');
var xlsx = require('xlsx');
var path = require('path');
let User = require('../models/User');
// route middleware to verify a token
router.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.auth.secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        console.log(decoded);
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
});
router.post('/calculation',function(req, res){
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.uploadDir = path.join(__dirname,'../upload');
  form.keepExtensions = true;
  form.maxFieldsSize = 2 * 1024 * 1024;
  form.parse(req, function(err, fields, files) {
    // 上传失败
    if (err) {
      res.json({
        success:false,
        msg:'上传文件失败，请重试'
      });
      return;
    }
    // xlsx解析
    var filepath = files.xls.path;
    var workbook = xlsx.readFile(filepath);
    console.log('workbook');
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];
    var calculation = xlsx.utils.sheet_to_json(worksheet);
    res.json({
      success: true,
      calculation: calculation,
      time: files.xls.mtime
    })
  });
});
router.post('/list', function(req, res){
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({
        success: false,
        message: '无法查询到相关用户'
      });
    }
    // res.json(user.chartItems);
  });
});
router.post('/saveCharts',(req, res) => {
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({
        success: false,
        message: '无法查询到相关用户'
      });
    }
    user.chartItems.push(req.body.chartItem);
    res.json({
      success: true,
      message: '保存图表成功'
    });
  });
});
module.exports = router;
