// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const userRoutes = require("./userRoutes.js");

// Router initialization
const router = Router();

// Requests
router.use("/users", userRoutes);

module.exports = router;
