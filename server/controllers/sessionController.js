const { Session } = require('../models/sessionModel');

const sessionController = {};

sessionController.createSession = (req, res, next) => {
  console.log("id in sessioncraetor:", res.locals.user[0].id);
  Session.create({cookieId: res.locals.user[0].id})
    .then(() => {
      return next()
    })
    .catch((err) => {
      return next({
        log: 'Error signing up',
        status: 500,
        message: {err: 'error signing up with new info'}
      })
    })
}



module.exports = sessionController;