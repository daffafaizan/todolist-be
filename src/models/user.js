// 3rd Party Modules
const Sequelize = require("sequelize");

// Local Modules
const db = require("../utils/database.js");
const todolist = require("./todolist.js");

// Model Initialization
const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    len: [3, 25],
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  accessToken: {
    type: Sequelize.STRING,
  },
  refreshToken: {
    type: Sequelize.STRING,
  },
});

User.hasMany(todolist);

module.exports = User;
