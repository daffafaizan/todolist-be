// 3rd Party Modules
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Local Modules
const env = process.env;
const User = require("../models/user.js");

// Services
const register = async (req) => {
  const salt = bcrypt.genSalt(10);
  const name = req.body.name;
  const username = req.body.username;
  const hashedPassword = bcrypt.hash(req.body.password, salt);
  if (!name || !username || !password) {
    throw new Error("Name, username, and password are required fields!");
  }
  const existingUsername = await User.findOne({ username: username });
  if (existingUsername) {
    throw new Error("Username already exists!");
  }
  const user = User.create({
    name: name,
    username: username,
    password: hashedPassword,
  });
  return user;
};

const login = async (req) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return null;
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    throw new Error("Invalid credentials!");
  }
  const token = jwt.sign({ id: user.id }, env.PRIVATE_KEY);
  return token;
};

module.exports = {
  register,
  login,
};
