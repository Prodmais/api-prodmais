const { Router } = require('express');
const { UserController } = require('../controllers');
const isAuthenticated = require('../middlewares/isAuthenticated');
const JoiValidator = require('../middlewares/JoiValidator');
const userSchema = require('../schemas/user.schema');
const routes = Router();

routes.post('/', JoiValidator(UserController.create, userSchema.create));

routes.post('/restore', JoiValidator(UserController.restore, userSchema.restore));

routes.use(isAuthenticated);

routes.get('/', UserController.findById);

routes.put('/', JoiValidator(UserController.update, userSchema.update));

routes.put('/UpdatePassword', JoiValidator(UserController.updatePassword, userSchema.updatePassword));

routes.delete('/', UserController.delete);

module.exports = routes;