// Local Modules
const userService = require("../services/userService.js");

// Controllers
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ users: users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ user: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await userService.updateUserById(id, req);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(201).json({ message: "User updated!" });
  } catch (err) {
    if (err.message.includes("already exists")) {
      res.status(400).json({ error: err.message });
    }
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await userService.deleteUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ message: "User deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
