const { Router } = require('express');
const { TaskController } = require('../controllers');
const isAutenticated = require('../middlewares/ isAutenticated');
const JoiValidator = require('../middlewares/JoiValidator');
const taskSchema = require('../schemas/task.schema');
const routes = Router();

routes.use(isAutenticated);

routes.post('/:boardId/task/', JoiValidator(TaskController.create, taskSchema.create));

routes.put('/:boardId/task/:id', JoiValidator(TaskController.update, taskSchema.update));

routes.get('/:boardId/task/', TaskController.findAll);

routes.get('/:boardId/task/:id', JoiValidator(TaskController.findOne, taskSchema.findOne));

routes.delete('/:boardId/task/:id', JoiValidator(TaskController.delete, taskSchema.delete));

module.exports = routes;