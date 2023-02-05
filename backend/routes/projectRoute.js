const express = require("express");
const projectForm = require("../controller/projectForm");
const showProject = require("../controller/showProjectController");
const routes = express.Router();
routes.post("/projectForm", projectForm);
routes.get("/allproject", showProject);
module.exports = routes;
