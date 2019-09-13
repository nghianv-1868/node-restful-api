// dependences
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const projects = require('./app/routes/projects.route');
const mongoose = require('mongoose');

// content
const app = express();

// Connect DB
mongoose.connect(
  'mongodb+srv://admin:' +
    process.env.MONGO_ATLAS_PW +
    '@rest-api-node-eunv4.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);

// Middlewares
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/projects', projects);

// ---catch 404 errors and forward---
app.use((req, res, next) => {
  const err = new Error('Not found!');
  err.status = 404;
  next(err);
});

app.use((req, res, next) => {
  const error = app.get('env') === 'development ' ? err : {};
  err.status = err.status || 500;

  res.status(status).json({
    error: {
      message: error.message
    }
  });
});

// modules export
module.exports = app;
