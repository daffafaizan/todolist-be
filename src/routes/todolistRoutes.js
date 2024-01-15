// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const todolistController = require("../controllers/todolistController.js");
const { authenticateUser } = require("../middlewares/authMiddleware.js");

// User Routes
const todolistRouter = Router();

todolistRouter.use(authenticateUser);

todolistRouter
  .route("/")
  .get(todolistController.getAllTodolists)
  .post(todolistController.createTodolist);

todolistRouter
  .route("/:id")
  .get(todolistController.getTodolistById)
  .patch(todolistController.updateTodolistById)
  .delete(todolistController.deleteTodolistById);

module.exports = todolistRouter;
