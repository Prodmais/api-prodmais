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
}