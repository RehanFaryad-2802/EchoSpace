const express = require("express");
const { Stats } = require("fs");
const { userInfo } = require("os");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
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
let posts = [
  {

    userInfo: {
      username: "Rehan Faryad",
      gender: 'male',
      id: uuidv4()
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam? Dolorum reprehenderit quia deserunt in commodi eum explicabo? Tenetur, animi.",
  },
  {

    userInfo: {
      username: "Ammar",
      gender: 'male',
      id: uuidv4()
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam? Dolorum reprehenderit quia deserunt in commodi eum explicabo? Tenetur, animi.",
  },
  {

    userInfo: {
      username: "Ying",
      gender: 'female',
      id: uuidv4()
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam? Dolorum reprehenderit quia deserunt in commodi eum explicabo? Tenetur, animi.",
  },
  {

    userInfo: {
      username: "Ling ",
      gender: 'female',
      id: uuidv4()
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam? Dolorum reprehenderit quia deserunt in commodi eum explicabo? Tenetur, animi.",
  },
]
app.get("/posts", (req, res) => {
  res.render("posts.ejs",{posts});
});

