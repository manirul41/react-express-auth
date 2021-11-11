const User = require("../models/User");

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: ''};

  // duplicate error code
  if(err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  //validation errors
  if(err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({properties}) => {
      //console.log(properties);
      errors[properties.path] = properties.message;
    })
  }

  return errors;
}

// controller actions
module.exports.home = (req, res) => {
  //res.json({ user: 'Tanim' })
  //res.render("home");
  res.format({
    "text/html": () => res.send("<p>Tanim</p>"),
  });
};

module.exports.signup_get = (req, res) => {
  res.json({ api: "sign up" });
};

module.exports.login_get = (req, res) => {
  res.json({ api: "login" });
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    const errors = handleErrors(error);
    console.log(errors);
    res.status(400).json({ errors });
  }
  //res.send("new signup");
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send("user login");
};
