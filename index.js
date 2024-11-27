const express = require("express");
const { Stats } = require("fs");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views",path.join(__dirname,'views'));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});
