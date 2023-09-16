const { User } = require('../models/userModel');

const userController = {};

userController.addUser = (req, res, next) => {
    const { username, password } = req.body;
    console.log('req body:', req.body);
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

userController.login = (req, res, next) => {
    const { username, password } = req.body;
    console.log('req body 2:', req.body)
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