const { TaskService } = require("../services");
const { AppError } = require('../errors');
const { TaskErrors, BoardErrors } = require("../errors/messages");
const { STATUS_TASK } = require("../constants");
const boardService = require("../services/board.service");

module.exports = {
  create: async function (request, response) {
    const { name, description, status } = request.body;
    const { boardId } = request.params;
    const userId = request.userId

    const data = {
      boardId,
      name,
      description,
      status: Object.values(STATUS_TASK)[status - 1],
    }

    const existBoard = await boardService.findById(boardId, userId);

    if (!existBoard) {
      throw new AppError(BoardErrors.BOARD005);
    }

    const task = await TaskService.create(data);

    response.status(201).json(task);
  },

  update: async function (request, response) {
    const { id, boardId } = request.params;

    const { name, description, status } = request.body;

    const userId = request.userId

    const existBoard = await boardService.findById(boardId, userId);

    if (!existBoard) {
      throw new AppError(BoardErrors.BOARD005);
    }

    const taskExists = await TaskService.findById(id, boardId);

    if (!taskExists) {
      throw new AppError(TaskErrors.TASK001);
    }

    const data = {
      id,
      name,
      description,
      status: Object.values(STATUS_TASK)[status - 1],
      boardId,
    }

    const task = await TaskService.update(id, data);

    response.status(200).json(task);
  },

  delete: async function (request, response) {
    const { id, boardId } = request.params;

    const userId = request.userId

    const existBoard = await boardService.findById(boardId, userId);

    if (!existBoard) {
      throw new AppError(BoardErrors.BOARD005);
    }

    const taskExists = await TaskService.findById(id, boardId);

    if (!taskExists) {
      throw new AppError(TaskErrors.TASK001);
    }

    const task = await TaskService.delete(id, boardId);

    response.status(200).json(task);
  },

  findAll: async function (request, response) {
    const { boardId } = request.params;
    const userId = request.userId

    const existBoard = await boardService.findById(boardId, userId);

    if (!existBoard) {
      throw new AppError(BoardErrors.BOARD005);
    }

    const tasks = await TaskService.findAll(boardId);

    response.status(200).json(tasks);
  },

  findOne: async function (request, response) {
    const { id, boardId } = request.params;
    const userId = request.userId

    const existBoard = await boardService.findById(boardId, userId);

    if (!existBoard) {
      throw new AppError(BoardErrors.BOARD005);
    }

    const existTask = await TaskService.findById(id, boardId);

    if (!existTask) {
      throw new AppError(TaskErrors.TASK001);
    }

    response.status(200).json(existTask);
  },
}