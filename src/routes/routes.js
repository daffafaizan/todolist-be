// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const authRoutes = require("./authRoutes.js");
const userRoutes = require("./userRoutes.js");

// Router initialization
const router = Router();

// Requests
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

module.exports = router;
