const { Router } = require('express');
const { UserController } = require('../controllers');
const JoiValidator = require('../middlewares/JoiValidator');
const userSchema = require('../schemas/user.schema');
const routes = Router();

routes.post('/', JoiValidator(UserController.create, userSchema.create));

module.exports = routes;