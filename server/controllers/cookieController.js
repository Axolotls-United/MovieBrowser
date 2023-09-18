const cookieController = {};


cookieController.setSSIDCookie = (req, res, next) => {
  console.log("USER USER USER IN MIDDLEWARE:", res.locals.user);
  if (res.locals.user) res.cookie('SSID', res.locals.user[0]._id);
  return next();
}


module.exports = cookieController;