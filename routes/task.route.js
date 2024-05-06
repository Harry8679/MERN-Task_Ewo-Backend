const express = require("express");
const { create, getAll, getSingleTask, deleteSingleTask } = require("../controllers/task.controller");

const taskRouter = express.Router();

taskRouter.post("/", create);
taskRouter.get("/", getAll);
taskRouter.get("/:id", getSingleTask);
taskRouter.delete("/:id", deleteSingleTask);

module.exports = taskRouter;
