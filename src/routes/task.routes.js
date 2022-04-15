const { Router } = require('express');
const { TaskController } = require('../controllers');
const JoiValidator = require('../middlewares/JoiValidator');
const taskSchema = require('../schemas/user.schema');
const routes = Router();

routes.post('/', JoiValidator(TaskController.create, taskSchema.create));

routes.put('/updateTask', JoiValidator(TaskController.update, taskSchema.update))

module.exports = routes;