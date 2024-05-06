const express = require('express');
const { create } = require('../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.post('/', create);

module.exports = taskRouter;