// Local Modules
const User = require("../models/user.js");

// Services
const getAllUsers = () => {
  return User.findAll();
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user || null;
};

const updateUserById = async (id, req) => {
  const updatedName = req.body.name;
  const updatedUsername = req.body.username;
  const updatedPassword = req.body.password;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    const existingUsername = await User.findOne({
      where: {
        username: updatedUsername,
      },
    });
    if (existingUsername && existingUsername.id != id) {
      throw new Error("Username already exists!");
    }
    user.name = updatedName || user.name;
    user.username = updatedUsername || user.username;
    user.password = updatedPassword || user.password;
    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
};

const deleteUserById = async (id) => {
  const user = User.findByPk(id);
  if (!user) {
    return null;
  }
  await User.destroy({
    where: {
      id: id,
    },
  });
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
