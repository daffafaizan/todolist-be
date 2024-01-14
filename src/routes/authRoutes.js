// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const authController = require("../controllers/authController.js");

// User Routes
const authRouter = Router();

authRouter.route("/register").post(authController.register);
authRouter.route("/login").post(authController.login);
authRouter.route("/logout").post(authController.logout);
authRouter.route("/refresh-token").post(authController.refreshAccessToken);

module.exports = authRouter;
