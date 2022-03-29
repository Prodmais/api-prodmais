const { Router } = require('express');
const { UserController } = require('../controllers');

const routes = Router();

routes.post('/', UserController.create);

module.exports = routes;