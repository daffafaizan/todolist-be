// Local Modules
const User = require("../models/user.js");

// Services
const register = async (req) => {
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
  const user = User.create({
    name: name,
    username: username,
    password: password,
  });
  return user;
};

module.exports = {
  register,
};
