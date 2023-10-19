const Router = require("express").Router();
const { addPost } = require("../Controllers/Post");

Router.get("/", addPost);

module.exports = Router;
