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
      res.status(400).json({ error: err.message });
    }
    if (err.message.includes("required fields")) {
      res.status(400).json({ error: err.message });
    }
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res, next) => {
  try {
    const { accessToken, refreshToken } = await authService.login(req, res);
    if (!accessToken || !refreshToken) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({
      message: "Successfully logged in!",
      data: { accessToken, refreshToken },
    });
  } catch (err) {
    if (err.message.includes("Invalid credentials")) {
      res.status(400).json({ error: err.message });
    }
    if (err.message.includes("User not found")) {
      res.status(404).json({ error: err.message });
    }
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const logout = async (req, res, next) => {
  try {
    await authService.logout(req, res);
    res.status(200).json({ message: "Successfully logged out!" });
  } catch (err) {
    if (err.message.includes("User not found")) {
      res.status(404).json({ error: err.message });
    }
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const refreshAccessToken = async (req, res, next) => {
  try {
    await authService.refreshToken(req, res);
    res.status(200).json({ message: "Access token successfully refreshed!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  refreshAccessToken,
};
