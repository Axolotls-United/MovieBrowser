const { User } = require('../models/userModel');
const bcrypt = require('bcrypt');
const userController = {};


//store a new user with data from req.body
//note that there are two arrays on users, favoriteMovies and watchList
//but they default to empty arrays, see /models/userModel.js
userController.addUser = (req, res, next) => {
    //destructure req.body params
  const { username, password } = req.body;

    //use create to create and save new User document on the database 
  bcrypt.hash(password, 10)
    .then((hashedPassword) => {
        return User.create({
        username: username,
        password: hashedPassword,
        });
    })
    .then((data) => {
        res.locals.user = data;
        return next();
    })
    .catch((err) => {
        return next({
        log: 'Error signing up',
        status: 500,
        message: { err: 'error signing up with new info' },
        });
    });
}


//check database for existing user with info on req.body
// //if its there pass it in on locals under user
// userController.login = (req, res, next) => {
//     const { username, password } = req.body;
//     User.find({
//         username: username,
//         password: password
//     })
//         .then((data) => {
//             if (!data || data.length === 0) return res.status(400).json({err: 'student not found'});
//             res.locals.user = data;
//             return next();
//         })
//         .catch((err) => {
//             return next({
//                 log: 'User now found',
//                 status: 400,
//                 message: {err: 'Could not find user in db, check logs for more info'}
//             });
//         });
// }



userController.login = (req, res, next) => {
    const { username, password } = req.body;
    User.find({
        username: username
    })
        .then((data) => {
            if (!data || data.length === 0) return res.status(400).json({err: 'student not found'});
            bcrypt.compare(password, data[0].password, (err, result) => {
                if (err || !result) {
                    return next({
                        log: 'Incorrect username or password',
                        status: 400,
                        message: {err: 'incorrect username or password'}
                    });
                }
                res.locals.user = data;
                return next();
                
            })
        })
        .catch((err) => {
            return next({
                log: 'User now found',
                status: 400,
                message: {err: 'Could not find user in db, check logs for more info'}
            });
        });
}


userController.addFavorite = (req, res, next) => {
    const { movie, username } = req.body;
    User.updateOne(
        {username: username},
        {$push: {favoriteMovies: movie}}
    )   
        .then((data) => {
            res.locals.addedMovie = data
            return next();
        })
        .catch((err) => {
            return next({
                log: 'error adding movie to user',
                status: 400,
                message: {err: 'Could not add a movie to user'}
            });
        })
}

userController.deleteFavorite = (req, res, next) => {
    const {title, username} = req.body;
    console.log(req.body);
    User.findOneAndUpdate(
        {username: username},
        { $pull: { favoriteMovies: { title: title } } }
    )
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'error deleting movie from users favorite movies',
                status: 400,
                message: {err: 'could not delete movie from favoriteMovies'}
            })
        })
}

userController.addWatch = (req, res, next) => {
    const { movie, username } = req.body;
    User.updateOne(
        {username: username},
        {$push: {watchList: movie}}
    )   
        .then((data) => {
            res.locals.addedMovie = data
            return next();
        })
        .catch((err) => {
            return next({
                log: 'error adding movie to user',
                status: 400,
                message: {err: 'Could not add a movie to user'}
            });
        })
}



userController.deleteWatch = (req, res, next) => {
    const {title, username} = req.body;
    console.log(req.params);
    User.updateOne(
        {username: username},
        { $pull: { watchList: { title: title } } }
    )
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'error deleting movie from users favorite movies',
                status: 400,
                message: {err: 'could not delete movie from favoriteMovies'}
            })
        })
}

module.exports = userController;