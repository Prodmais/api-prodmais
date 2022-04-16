const { TaskService } = require("../services");
const { AppError } = require('../errors');
const { TaskErrors } = require("../errors/messages");

module.exports = {
  create: async function (request, response) {
    const { name, description, status } = request.body;
    const userId = request.userId;

    const data = {
      userId,
      name,
      description,
      status,
    }

    const task = await TaskService.create(data);

    response.status(201).json(task);
  },

  update: async function (request, response) {
    const { id } = request.params;
    const userId = request.userId;

    const { name, description, status } = request.body;

    const taskExists = await TaskService.findById(id, userId);

    if (!taskExists) {
      throw new AppError(TaskErrors.TASK001);
    }

    const data = {
      id,
      name,
      description,
      status,
      userId,
    }

    const task = await TaskService.update(id, data);

    response.status(200).json(task);
  },

  delete: async function (request, response) {
    const { id } = request.params;
    const userId = request.userId;

    const taskExists = await TaskService.findById(id, userId);

    if (!taskExists) {
      throw new AppError(TaskErrors.TASK001);
    }

    const task = await TaskService.delete(id, userId);

    response.status(200).json(task);
  },

  findAll: async function (request, response) {
    const userId = request.userId;

    const tasks = await TaskService.findAll(userId);

    response.status(200).json(tasks);
  },

  findOne: async function (request, response) {
    const { id } = request.params
    const userId = request.userId

    const existTask = await TaskService.findById(id, userId);

    if (!existTask) {
      throw new AppError(TaskErrors.TASK001);
    }

    response.status(200).json(existTask);
  },
}