const Router = require("express").Router();
const { register, login, logout } = require("../Controllers/Auth");

Router.post("/register", register);
Router.post("/login", login);
Router.post("/logout", logout);

module.exports = Router;
