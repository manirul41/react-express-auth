const { Router } = require("express");
const authController = require("../controllers/authController");

const authRoutes = Router();

authRoutes.get("/", (req, res) => {
  console.log("home");
});
authRoutes.get("/signup", authController.signup_get);
authRoutes.post("/signup", authController.signup_post);
authRoutes.get("/login", authController.login_get);
authRoutes.post("/login", authController.login_post);

module.exports = authRoutes;
