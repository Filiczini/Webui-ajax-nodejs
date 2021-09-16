const express = require("express");
const path = require("path");
const data = require("../nodejs-lessons/assets/users.json");

const app = express();
const PORT = 3000;

app.set("view-engine", "ejs");
app.use(express.static("styles"));
const createEjsPath = (page) => path.resolve(__dirname, "views", `${page}`);
const createAssetsPath = (page) => path.resolve(__dirname, "assets", `${page}`);

app.get("/", (req, res) => {
  res.render(createEjsPath("index.ejs"), { data: data });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("what a heck ?");
});