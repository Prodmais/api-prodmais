const { Router } = require('express');
const { TaskController } = require('../controllers');
const isAutenticated = require('../middlewares/ isAutenticated');
const JoiValidator = require('../middlewares/JoiValidator');
const taskSchema = require('../schemas/user.schema');
const routes = Router();

routes.use(isAutenticated);

routes.post('/', JoiValidator(TaskController.create, taskSchema.create));

routes.put('/:id', JoiValidator(TaskController.update, taskSchema.update));

routes.get('/', TaskController.findAll);

routes.get('/:id', JoiValidator(TaskController.findOne, taskSchema.findOne));

routes.delete('/:id', JoiValidator(TaskController.delete, taskSchema.delete));

module.exports = routes;