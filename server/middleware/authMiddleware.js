const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "secret code", (err, decodedToken) => {
      if (err) {
        //console.log(err.message);
        res.status(401).json({ errors: "Unauthorized access!" });
        //res.redirect('/login')
      } else {
        //console.log(decodedToken);
        // res.status(200).send("Authorized User")
        next();
      }
    });
  } else {
    res.status(401).json({ errors: "Unauthorized access!" });
    //res.redirect('/login');
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret code", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        //console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        //console.log("checkuser", res.locals.user);
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
