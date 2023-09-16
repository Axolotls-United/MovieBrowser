const express = require('express');
const app = express();
const path = require('path');

const apiRouter = require('./routes/apiRouter');
const userRouter = require('./routes/userRouter');

//tell express to parse data
app.use(express.json());

//serve static files from public directory  
app.use(express.static('public'));

//router for API calls to OMDB
app.use('/api', apiRouter);

//router for database management 
app.use('/user', userRouter);


//catch all
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

//on port 3000 because that is a good number or something
app.listen(3000);

module.exports = app;