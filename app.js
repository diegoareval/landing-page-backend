const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const signupRouter = require('./routes/signup');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const faqRouter = require('./routes/faq');
const projectRouter = require('./routes/project');
const contactRouter = require('./routes/contact');
const settingRouter = require('./routes/setting');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./docs/output.json')

const passport = require('passport');
require('./passport');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// allow-cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.send(200);
  }
  else {
    //move on
    next();
  }
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/api/v1/accounts/signup', signupRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/faq', faqRouter);
app.use('/api/v1/setting', settingRouter);
app.use('/api/v1/project', projectRouter);
app.use('/api/v1/contact', contactRouter);
app.use('/api/v1/users', passport.authenticate('jwt', {session: false}), userRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  console.log(err);
  res.status(err.status || 500);
  res.json({
    status: 'error',
    data: err.message,
    message: 'Something went wrong!!! Please try again later.'
  });
});

module.exports = app;
