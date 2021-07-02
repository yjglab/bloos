import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  // pug can access this vars.
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "BLOOS";
  res.locals.loggedInUser = req.session.user || {};
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};
export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const avatarUpload = multer({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 3000000, // 3 mb
  },
});
export const videoUpload = multer({
  dest: "uploads/videos/",
  limits: {
    fileSize: 15000000, // 15 mb
  },
});
