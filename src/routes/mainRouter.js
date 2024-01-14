// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const mainController = require("../controllers/mainController.js");

// Router initialization
const mainRouter = Router();

// Requests
mainRouter.get("/", mainController.getMain);

module.exports = mainRouter;
