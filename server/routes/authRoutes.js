const { Router } = require("express");
const authController = require("../controllers/authController");
const { requireAuth } = require("../middleware/authMiddleware");

const authRoutes = Router();

// authRoutes.get("/", requireAuth, (req, res) => {
//   res.json({ api: "home" });
// });
authRoutes.get("/all", requireAuth, (req, res) => {
  res.json({ api: res.locals.user });
});
authRoutes.get("/auth", requireAuth, (req, res) => {
  res.status(200).send("Authorized User")
});
authRoutes.get("/signup", authController.signup_get);
authRoutes.post("/signup", authController.signup_post);
authRoutes.get("/login", authController.login_get);
authRoutes.post("/login", authController.login_post);
authRoutes.get("/logout", authController.logout_get);

module.exports = authRoutes;
