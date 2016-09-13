/**
 * Created by cosine on 2016/9/13.
 */
var User = require('./users');
var passport = require('passport');
var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('index.jade', { user: req.user });
});

router.post('/register', function(req, res, next) {
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
router.get('/register', function(req, res) {
  res.render('register', {});
});
router.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
