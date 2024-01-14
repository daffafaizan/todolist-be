// Local Modules
const User = require("../models/user.js");

// Services
const getAllUsers = () => {
  const users = User.findAll();
  return users;
};

const getUserById = (id) => {
  const user = User.findByPk(id);
  if (!user) {
    return nil;
  }
  return user;
};

const createUser = (req) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const user = User.create({
    name: name,
    username: username,
    password: password,
  });
  return user;
};

const updateUserById = (id, req) => {
  const updatedName = req.body.name;
  const updatedUsername = req.body.username;
  const updatedPassword = req.body.password;
  const user = User.findByPk(id);
  if (!user) {
    return nil;
  }
  user.name = updatedName;
  user.username = updatedUsername;
  user.password = updatedPassword;
  return user.save();
};

const deleteUserById = (id) => {
  const user = User.findByPk(id);
  if (!user) {
    return nil;
  }
  return User.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
