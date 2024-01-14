// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const mainController = require("../controllers/mainController.js");
const userRouter = require("./userRouter.js");

// Router initialization
const mainRouter = Router();

// Requests
mainRouter.get("/", mainController.getMain);
mainRouter.use("/users", userRouter);

module.exports = mainRouter;
