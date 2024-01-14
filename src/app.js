// 3rd Party Modules
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database.js");
require("dotenv/config");

// Local Modules
const mainRoutes = require("./routes/mainRouter.js");
const env = process.env;
const PORT = env.PORT;

// Server Initialization
app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Server Setup
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  next();
});

// Routes
app.use("/api/v1", mainRoutes);

// Global Error Handler for synchronous errors
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  // Handle the error gracefully or perform cleanup tasks
  process.exit(1); // Terminate the process after handling the exception
});

// Global Error Handler for asynchronous errors (Promise rejections)
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Handle the rejection or log it
});

// Error Handling
app.use((error, _, res, _) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message || "Internal server error";
  res.status(status).json({ message: message });
});

// Sync Database and Server Connection
sequelize
  .sync()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server has started on port:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
