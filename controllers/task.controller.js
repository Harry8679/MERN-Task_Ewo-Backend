const Task = require("../models/task.model");

const create = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.send(500).json({
      message: error.message,
    });
  }
};

module.exports = { create };
