// 3rd Party Modules
const express = require("express");
require("dotenv/config");

// Local Modules
const mainRoutes = require("./routes/mainRouter.js");
const env = process.env;

// Server Initialization
const PORT = env.PORT;
app = express();

// Middlewares

// Routes
app.use("/api/v1", mainRoutes);

// Server listen and Database connection
app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
