const express = require('express');

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

//signup will create then automatically run login
//with the same req.body properties just used to make a user
//returns newly created User with all attatched data

//check middleware for more info 
router.post('/signup',
    userController.addUser,
    cookieController.setSSIDCookie,
    sessionController.createSession,
    (req, res) => res.status(201).json(res.locals.user)
);


router.get('/session',
    sessionController.verifySession,
    userController.findUserById,
    (req, res) => res.status(200).json(res.locals.foundUser)
);

//log in with passed in username and password on body
//returns existing User with all attatched data

//check middleware for more info 
router.post('/login',
    userController.login,
    cookieController.setSSIDCookie,
    sessionController.createSession,
    (req, res) => res.status(200).json(res.locals.user)
);


router.post('/addFavorite',
    userController.addFavorite,
    (req, res) => res.status(200).json(res.locals.addedMovie)
);

router.delete('/deleteFavorite',
    userController.deleteFavorite,
    (req, res) => res.status(200).json({message: 'Successfully deleted'})
);

router.post('/addWatch',
    userController.addWatch,
    (req, res) => res.status(200).json(res.locals.addedMovie)
);

router.delete('/deleteWatch',
    userController.deleteWatch,
    (req, res) => res.status(200).json({message: 'Successfully deleted'})
);


module.exports = router;