// 3rd Party Modules
const Sequelize = require("sequelize");
require("dotenv/config");

// Local Modules
const env = process.env;

// Database Initialization
const sequelize = new Sequelize(env.DB_CONNECTION_STRING, {
  dialect: "postgres",
});

module.exports = sequelize;
