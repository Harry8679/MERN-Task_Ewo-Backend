const asyncHandler = require('express-async-handler');
const Task = require("../models/task.model");

/********** Create a new Task ***********/
const create = asyncHandler(async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(200).json(task);
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
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = { create, getAll };
