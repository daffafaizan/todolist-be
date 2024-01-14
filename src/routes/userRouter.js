// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const userController = require("../controllers/userController.js");

// User Routes
const userRouter = Router();

userRouter
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

userRouter
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.updateUserById)
  .delete(userController.deleteUserById);

module.exports = userRouter;
