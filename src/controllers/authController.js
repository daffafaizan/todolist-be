// Local Modules
const authService = require("../services/authService.js");

// Controllers
const register = async (req, res, next) => {
  try {
    const user = await authService.register(req);
    res.status(201).json({
      message: "User created!",
      user: user,
    });
  } catch (err) {
    if (err.message.includes("already exists")) {
      res.status(400).json({ message: err.message });
    }
    if (err.message.includes("required fields")) {
      res.status(400).json({ message: err.message });
    }
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res, next) => {
  try {
    const { accessToken, refreshToken } = await authService.login(req);
    if (!accessToken || !refreshToken) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000, // 15 minutes
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({ message: "Successfully logged in!" });
  } catch (err) {
    if (err.message.includes("Invalid credentials")) {
      res.status(400).json({ message: err.message });
    }
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const logout = (req, res, next) => {
  authService.logout(res);
  res.status(200).json({ message: "Successfully logged out!" });
};

module.exports = {
  register,
  login,
  logout,
};
