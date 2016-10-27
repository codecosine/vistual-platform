var express = require('express');
var router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
var User = require('../models/User');
let config = require('../config');

// Register new users
router.post('/register', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      message: 'Please enter email and password.'
    });
  } else {
    let newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          message: '注册失败，用户名已存在'
        });
      }
      res.json({
        success: true,
        message: '注册成功，即将跳转到应用'
      });
    });
  }
});


// Authenticate the user and get a JSON Web Token to include in the header of future requests.
router.post('/auth', (req, res) => {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({
        success: false,
        message: '权限校验失败，用户不存在！'
      });
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          var token = jwt.sign(user, config.auth.secret, {
            expiresIn: "2 days"
          });
          res.json({
            success: true,
            message: '权限校验成功',
            token
          });
        } else {
          res.send({
            success: false,
            message: '登录失败，密码不正确。'
          });
        }
      });
    }
  });
});


// Example of required auth: protect dashboard route with JWT
router.get('/token', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  res.send({
    success: true,
    message: 'token校验成功'
  });
});


module.exports = router;
