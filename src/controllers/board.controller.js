const boardService = require("../services/board.service");

module.exports = {
    create: async function (request, response) {
        const { name, description, isMobile } = request.body;
        const userId = request.userId;

        const data = {
            userId,
            name,
            description,
            isMobile,
        }

        const board = await boardService.create(data);

        response.status(201).json(board);
    },
    findAll: async function (request, response) {
        const userId = request.userId;
    
        const board = await boardService.findAll(userId);
    
        response.status(200).json(board);
      },
    
      findOne: async function (request, response) {
        const { id } = request.params
        const userId = request.userId
    
        const existBoard = await boardService.findById(id, userId);
    
        if(!existBoard) {
          throw new AppError(BoardErrors.BOARD002);
        }
        
        response.status(200).json(existBoard);
      },

      findMobile: async function (request, response) {
        const mobile = await boardService.findMobile();

        response.status(200).json(mobile)
      },
}