var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/testAdd');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/main', testRouter.main);
app.get('/community', testRouter.community);
app.get('/notice', testRouter.notice);
app.get('/release', testRouter.release);
app.get('/roomate', testRouter.roomate);
app.get('/roomdetail', testRouter.roomdetail);
app.get('/roomdetail1', testRouter.roomdetail1);
app.get('/roomdetail2', testRouter.roomdetail2);
app.get('/roomdetail3', testRouter.roomdetail3);
app.get('/signup', testRouter.signup);
app.get('/signin', testRouter.signin);


console.log(__dirname+app);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
