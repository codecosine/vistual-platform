var path = require('path');
var express = require('express');
var mongoose = require('mongoose');

var logger = require('morgan');

var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

var app = express();


passport.use(new Strategy(users.authenticate()));
passport.serializeUser(users.serializeUser());
passport.deserializeUser(users.deserializeUser());

// Connect mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose_examples', function(err) {
  if (err) {
    console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
  }
});



// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));

app.use(express.static(path.join(__dirname, 'public')));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Register routes
app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server listening on port ', app.get('port'));
});
