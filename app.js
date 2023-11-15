var createError = require('http-errors');
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Tool = require("./models/tool");
var mongoose = require('mongoose');

require('dotenv').config();
let connectionString = process.env.MONGO_CON;
connectionString = 'mongodb+srv://Gavon:123@cluster0.wbph7cr.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toolRouter = require('./routes/tool');
var resourceRouter = require('./routes/resource');

//We can seed the collection if needed on server start
async function recreateDB(){
  await Tool.deleteMany();
  
  let instance1 = new Tool({tool_type:"saw", size:'small', cost:56.33});
  instance1.save().then(doc=>{
    console.log("first object saved")}
  ).catch(err=>{
    console.error(err)
  });
}
let reseed = true; 
if (reseed) {recreateDB();}

var app = express();
toolRouter.get('/tool/:id',tool_controller.tool_detail);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tool', toolRouter);
app.use('/resource', resourceRouter);

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
