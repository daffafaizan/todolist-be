// 3rd Party Modules
const Sequelize = require("sequelize");

// Local Modules
const db = require("../utils/database.js");
const Todolist = require("./todolist.js");

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
    len: [7, 30],
  },
  accessToken: {
    type: Sequelize.STRING,
  },
  refreshToken: {
    type: Sequelize.STRING,
  },
});

User.hasMany(Todolist);
Todolist.belongsTo(User);

module.exports = User;
