const express = require("express");
const { create, getAll, getSingleTask, deleteSingleTask, updateTask } = require("../controllers/task.controller");

const taskRouter = express.Router();

taskRouter.post("/", create);
taskRouter.get("/", getAll);
taskRouter.get("/:id", getSingleTask);
taskRouter.delete("/:id", deleteSingleTask);
taskRouter.put("/:id", updateTask);

module.exports = taskRouter;
