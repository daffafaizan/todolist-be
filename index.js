const express = require("express");
require("dotenv/config");
const PORT = process.env.PORT;

app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
