const { Router } = require('express');
const { BoardController } = require('../controllers');
const isAuthenticated = require('../middlewares/isAuthenticated');
const JoiValidator = require('../middlewares/JoiValidator');
const boardSchema = require('../schemas/board.schema');
const routes = Router();

routes.use(isAuthenticated);

routes.post('/', JoiValidator(BoardController.create, boardSchema.create));

routes.get('/mobile', BoardController.findMobile);

routes.get('/:id', JoiValidator(BoardController.findOne, boardSchema.findOne));

routes.get('/', BoardController.findAll);

routes.put('/:id', JoiValidator(BoardController.update, boardSchema.update));

routes.delete('/:id', JoiValidator(BoardController.delete, boardSchema.delete));


module.exports = routes;