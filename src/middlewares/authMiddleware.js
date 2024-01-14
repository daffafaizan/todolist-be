// 3rd Party Modules
const jwt = require("jsonwebtoken");

// Local Modules
const env = process.env;

const authenticateUser = (req, res, next) => {
  const token = req.cookies["jwt"] || req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized. Token not provided" });
  }
  try {
    const decodedToken = jwt.verify(token, env.ACCESS_TOKEN_SECRET);
    req.userId = decodedToken.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = {
  authenticateUser,
};
