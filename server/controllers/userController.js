const { User } = require('../models/userModel');

const userController = {};


//store a new user with data from req.body
//note that there are two arrays on users, favoriteMovies and watchList
//but they default to empty arrays, see /models/userModel.js
userController.addUser = (req, res, next) => {
    //destructure req.body params
    const { username, password } = req.body;

    //use create to create and save new User document on the database 
    User.create({
        username: username,
        password: password,
    })
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'Error signing up',
                status: 500,
                message: {err: 'error signing up with new info'}
              });
        })
}


//check database for existing user with info on req.body
userController.login = (req, res, next) => {
    const { username, password } = req.body;
    User.find({
        username: username,
        password: password
    })
        .then((data) => {
            if (!data || data.length === 0) return res.status(400).json({err: 'student not found'});
            res.locals.user = data;
            return next();
        })
        .catch((err) => {
            return next({
                log: 'User now found',
                status: 400,
                message: {err: 'Could not find user in db, check logs for more info'}
            });
        });
}


module.exports = userController;