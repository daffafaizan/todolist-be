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
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  next();
});

// Routes
app.use("/api/v1", mainRoutes);

// Error Handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// Sync Database and Server Connection
sequelize
  .sync()
  .then((result) => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server has started on port:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
