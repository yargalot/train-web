var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.route('/home')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    console.log('test');
    res.render('home/index.jade', { title: 'Express' });
  });

app.route('/stations')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    console.log('test');
    res.render('stations/index.jade', { title: 'Express' });
  });

app.route('/stations/line')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    console.log('test');
    res.render('stations/line.jade', { title: 'Express' });
  });

app.route('/trains')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    console.log('test');
    res.render('trains/index.jade', { title: 'Express' });
  });

app.route('/trains/train')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    console.log('test');
    res.render('trains/train.jade', { title: 'Express' });
  });

app.use('/api', function(req, res) {
  url = 'http://mysterious-mountain-3628.herokuapp.com/' + req.url;
  req.pipe(request(url)).pipe(res);
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/// error handlers

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


module.exports = app;
