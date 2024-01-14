// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const userController = require("../controllers/userController.js");
const { authenticateUser } = require("../middlewares/authMiddleware.js");

// User Routes
const userRouter = Router();

userRouter.route("/").get(authenticateUser, userController.getAllUsers);

userRouter
  .route("/:id")
  .get(authenticateUser, userController.getUserById)
  .patch(authenticateUser, userController.updateUserById)
  .delete(authenticateUser, userController.deleteUserById);

module.exports = userRouter;
