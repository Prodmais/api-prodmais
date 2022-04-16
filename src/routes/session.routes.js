const { Router } = require('express');
const { SessionController } = require('../controllers');
const JoiValidator = require('../middlewares/JoiValidator');
const sessionSchema = require('../schemas/session.schema');
const routes = Router();

routes.post('/login', JoiValidator(SessionController.login, sessionSchema.login));

module.exports = routes;