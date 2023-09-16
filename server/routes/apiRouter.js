const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();

//returns array of objects containing movie info title year etc
//check controller for more info 
router.get('/broadSearch',
  apiController.broadSearch,
  (req, res) => {return res.status(200).json(res.locals.list)}
);

//returns single movie object with lots of info, synopsis included
//check middleware for more info 
router.get('/narrowSearch',
  apiController.narrowSearch,
  (req, res) => {return res.status(200).json(res.locals.list)}
);

module.exports = router;