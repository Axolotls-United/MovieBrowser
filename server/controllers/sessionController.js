const { Session } = require('../models/sessionModel');

const sessionController = {};

sessionController.createSession = (req, res, next) => {
  console.log("id in sessioncraetor:", res.locals.user.id);
  Session.findOneAndDelete({cookieId: res.locals.user.id})
    .then(() => {
      Session.create({cookieId: res.locals.user.id})
        .then(() => {
          return next()
        })
        .catch((err) => {
          return next({
            log: 'Error creating session',
            status: 500,
            message: {err: 'error creating session'}
          });
        });
    })
    .catch((err) => {
      return next({
        log: 'Error creating session',
        status: 500,
        message: {err: 'error creating session'}
      });
    });

}

sessionController.verifySession = (req, res, next) => {
  const SSID = req.cookies.SSID;
  if (!req.cookies.SSID) {
    return next({
      log: 'no cookies available',
      status: 500,
      message: {err: 'no cookiesavailable'}
      })
  }
  Session.findOne({cookieId: SSID})
    .then((data) => {
      if (data) {
        console.log('SSID in verify:', SSID)
        res.locals.session = SSID;
        return next();
      } else {
        return next({
        log: 'Error verifying session',
        status: 500,
        message: {err: 'error verifying session'}
        })
      }
    })
    .catch((err) => {
      return next({
        log: 'Error verifying session',
        status: 500,
        message: {err: 'error verifying session'}
      });
    });
}


module.exports = sessionController;