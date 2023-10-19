const Router = require("express").Router();
const { addPost } = require("../Controllers/User");

Router.get("/", addPost);

module.exports = Router;
