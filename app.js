var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

process.on('uncaughtException', err => {
    console.error('uncaugh Exception!');
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next){
    res.status(404)
    .json({
        status: 'error',
        message: '無此路由資訊',
    })
})

app.use(function(err, req, res, next){
    res.status(500)
    .json({
        err: err.message
    })
})


module.exports = app;
