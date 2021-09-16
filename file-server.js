const express = require("express");
const data = require("./users.json");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
