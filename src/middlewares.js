export const localsMiddleware = (req, res, next) => {
  // pug can access this vars.
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "BLOOS";
  res.locals.loggedInUser = req.session.user;
  next();
};
