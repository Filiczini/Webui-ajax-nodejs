const express = require("express");
const path = require("path");
const data = require("./users.json");
const app = express();
const PORT = 3050;

app.set("view-engine", "ejs");

const createEjsPath = (page) => path.resolve(__dirname, "views", `${page}`);

app.get("/", (req, res) => {
  res.render(createEjsPath("index.ejs"), { data: data });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
