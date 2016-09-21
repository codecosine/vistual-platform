/**
 * Created by cosine on 2016/9/13.
 */
var User = require('./users');
var passport = require('passport');
var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('index.jade', { user: req.user });
});

router.post('api/register', function(req, res, next) {
  console.log('registering user');
  User.register(new User({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }
    console.log('user registered!');
    res.redirect('/');
  });
});


router.post('api/login', passport.authenticate('local'), function(req, res) {
  console.log('login user');

  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
