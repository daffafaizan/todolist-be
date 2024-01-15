// 3rd Party Modules
const Sequelize = require("sequelize");

// Local Modules
const db = require("../utils/database.js");

// Model Initialization
const Todolist = db.define("todolist", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT("long"),
  },
  priority: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Todolist;
