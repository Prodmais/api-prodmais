const { Router } = require('express');
const { BoardController } = require('../controllers');
const isAutenticated = require('../middlewares/ isAutenticated');
const JoiValidator = require('../middlewares/JoiValidator');
const boardSchema = require('../schemas/board.schema');
const routes = Router();

routes.use(isAutenticated);

routes.post('/', JoiValidator(BoardController.create, boardSchema.create));

module.exports = routes;