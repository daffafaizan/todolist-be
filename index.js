const express = require("express");
const PORT = 8000;

app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
