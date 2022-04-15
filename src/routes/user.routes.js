const { Router } = require('express');
const { UserController } = require('../controllers');
const isAutenticated = require('../middlewares/ isAutenticated');
const JoiValidator = require('../middlewares/JoiValidator');
const userSchema = require('../schemas/user.schema');
const routes = Router();

routes.post('/', JoiValidator(UserController.create, userSchema.create));

routes.use(isAutenticated);

routes.get('/', UserController.findById);

routes.put('/', JoiValidator(UserController.update, userSchema.update));

module.exports = routes;