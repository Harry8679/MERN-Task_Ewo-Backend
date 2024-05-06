const express = require("express");
const { create, getAll, getSingleTask } = require("../controllers/task.controller");

const taskRouter = express.Router();

taskRouter.post("/", create);
taskRouter.get("/", getAll);
taskRouter.get("/:id", getSingleTask);

module.exports = taskRouter;
