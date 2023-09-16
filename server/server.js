const express = require('express');
const app = express();
const path = require('path');

const apiRouter = require('./routes/apiRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());

app.use(express.static('public'));


app.use('/api', apiRouter);

app.use('/user', userRouter);


// catch all
app.use((req, res) => res.status(404).send('Wrong page. Go away.'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);

module.exports = app;