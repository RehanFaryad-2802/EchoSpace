const express = require("express");
const { Stats } = require("fs");
const { userInfo } = require("os");
const path = require("path");
var methodOverride = require('method-override')
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 8080;

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});
let posts = [
  {
    username: "Rehan Faryad",
    gender: "male",
    id: uuidv4(),
    content: `Coding has become a cornerstone of the modern world, driving innovation and powering technology. It allows individuals to communicate with computers and create programs, websites, apps, and more. Learning to code is not just for tech professionals; it is a valuable skill for anyone looking to thrive in today's digital landscape.`,
    imgageURL: `https://picsum.photos/200/100?random=${Math.floor(
      Math.random() * 9999 + 1
    )}`,
  },
  {
    username: "Ammar",
    gender: "male",
    id: uuidv4(),

    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam? Dolorum reprehenderit quia deserunt in commodi eum explicabo? Tenetur, animi.",
    imgageURL: `https://picsum.photos/200/100?random=${Math.floor(
      Math.random() * 9999 + 1
    )}`,
  },
  {
    username: "Ying",
    gender: "female",
    id: uuidv4(),
    imgageURL: `https://picsum.photos/200/100?random=${Math.floor(
      Math.random() * 9999 + 1
    )}`,

    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam? Dolorum reprehenderit quia deserunt in commodi eum explicabo? Tenetur, animi.",
  },
  {
    username: "Ling ",
    gender: "female",
    id: uuidv4(),
    imgageURL: `https://picsum.photos/200/100?random=${Math.floor(
      Math.random() * 9999 + 1
    )}`,

    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam? Dolorum reprehenderit quia deserunt in commodi eum explicabo? Tenetur, animi.",
  },
];
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
app.get("/posts", (req, res) => {
  res.render("posts.ejs", { posts });
});
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => id === post.id);
  // console.log(post)
  res.render("single-post.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((post) => id === post.id);
  post.content = newContent;
  res.redirect('/posts')
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => id === post.id);
  res.render("edit.ejs", { post});
});
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((post) => id !== post.id);
  res.redirect('/posts')
});


app.post("/posts/new", (req, res) => {
  let { username, gender, content } = req.body;
  posts.unshift({
    username,
    gender,
    id: uuidv4(),
    content,
    imgageURL: `https://picsum.photos/200/100?random=${Math.floor(
      Math.random() * 9999 + 1
    )}`,
  });
  res.redirect("/posts");
});
