// 3rd Party Modules
const Sequelize = require("sequelize");
require("dotenv/config");

// Local Modules
const env = process.env;

// Database Initialization
const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
