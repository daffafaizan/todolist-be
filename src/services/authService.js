// 3rd Party Modules
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Local Modules
const env = process.env;
const User = require("../models/user.js");

// Services
const register = async (req) => {
  const salt = await bcrypt.genSalt(10);
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  if (!name || !username || !password) {
    throw new Error("Name, username, and password are required fields!");
  }
  const existingUsername = await User.findOne({
    where: {
      username: username,
    },
  });
  if (existingUsername) {
    throw new Error("Username already exists!");
  }
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = User.create({
    name: name,
    username: username,
    password: hashedPassword,
  });
  return user;
};

const login = async (req) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!user) {
    return null;
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    throw new Error("Invalid credentials!");
  }
  const token = jwt.sign({ id: user.id }, env.ACCESS_TOKEN_SECRET);
  return token;
};

module.exports = {
  register,
  login,
};
