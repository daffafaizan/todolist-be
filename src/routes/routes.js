// 3rd Party Modules
const { Router } = require("express");

// Local Modules
const authRoutes = require("./authRoutes.js");
const userRoutes = require("./userRoutes.js");
const todolistRoutes = require("./todolistRoutes.js");

// Router initialization
const router = Router();

// Requests
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/todolist", todolistRoutes);

module.exports = router;
