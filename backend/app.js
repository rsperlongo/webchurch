const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/churchmanagament')
.then(() => console.log('connection successfull'))
.catch((err) => console.log(err));

const apiRouter = require('./routes/members');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist/churchmanagement')));
app.use('/members', express.static(path.join(__dirname, 'dist/churchmanagement')));
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Está funcionando! :)')
});

app.listen(3000, () => {
  console.log('rodando na porta 3000');
});

module.exports = app;
