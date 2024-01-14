// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const authController = require("../controllers/authController.js");

// User Routes
const authRouter = Router();

authRouter.route("/register").post(authController.register);

module.exports = authRouter;
