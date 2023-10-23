const Router = require("express").Router();
const {
  addPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
} = require("../Controllers/Post");

Router.get("/", getPosts);
Router.get("/:id", getPost);
Router.post("/", addPost);
Router.delete("/:id", deletePost);
Router.put("/:id", updatePost);

module.exports = Router;
