require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(mongodb+srv://Gavon:<123>@cluster0.wbph7cr.mongodb.net/?retryWrites=true&w=majority);
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Tool = reauire("./models/tool");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toolRouter = require('./routes/tool');
var app = express();

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

//We can seed the collection if needed on server start
async function recreateDB(){
  await Tool.deleteMany();
  let instance1 = new
  Tool({tool_type:"saw", size:'small', cost:56.33});
  instance1.save().then(doc=>{
    console.log("first object saved")}
  ).catch(err=>){
    console.error(err)
  });
}
let reseed = true; 
if (reseed) {recreateDB();}
module.exports = app;


