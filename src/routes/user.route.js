const userCtrl = require("../controllers/user.controller");
const routerUser = require("express").Router();

routerUser.post("/login", userCtrl.login);

module.exports = routerUser;