const express = require("express");
const { create, getAll } = require("../controllers/task.controller");

const taskRouter = express.Router();

taskRouter.post("/", create);
taskRouter.get("/", getAll);

module.exports = taskRouter;
