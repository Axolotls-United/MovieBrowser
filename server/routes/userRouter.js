const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup',
    userController.addUser,
    userController.login,
    (req, res) => res.status(201).json(res.locals.user)
);

router.get('/login',
    userController.login,
    (req, res) => res.status(200).json(res.locals.user)
);

module.exports = router;