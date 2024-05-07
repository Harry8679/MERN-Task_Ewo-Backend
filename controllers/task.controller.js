const asyncHandler = require("express-async-handler");
const Task = require("../models/task.model");

/********** Create a new Task ***********/
const create = asyncHandler(async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.send(500).json({
      message: error.message,
    });
  }
});

/********** Get All Tasks ***********/
const getAll = asyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/********** Get A Task ***********/
const getSingleTask = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json(`No task with id: ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/********** Delete A Task ***********/
const deleteSingleTask = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
        return res.status(404).json(`No task with id: ${id}`);
    }

    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/********** Update A Task ***********/
const updateTask = asyncHandler(async(req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });

        if (!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }

        res.status(200).json(task);
    } catch(error) {
        res.status(500).json({ message: error.message });
    };
});

module.exports = { create, getAll, getSingleTask, deleteSingleTask, updateTask };
