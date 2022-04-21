const { AppError } = require("../errors");
const { BoardErrors } = require("../errors/messages");
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
        return board;
    },

    findOne: async function (request, response) {
        const { id } = request.params
        const userId = request.userId

        const existBoard = await boardService.findById(id, userId);

        if (!existBoard) {
            throw new AppError(BoardErrors.BOARD005);
        }

        response.status(200).json(existBoard);
    },

    update: async function (request, response) {
        const { name, description } = request.body;
        const userId = request.userId;
        const { id } = request.params;

        const data = {
            id,
            userId,
            name,
            description
        }

        const existBoard = await boardService.findById(id, userId);

        if (!existBoard) {
            throw new AppError(BoardErrors.BOARD005);
        }

        const board = await boardService.update(id, data);

        response.status(200).json(board);
    },

    delete: async function (request, response) {
        const userId = request.userId;
        const { id } = request.params;

        const existBoard = await boardService.findById(id, userId);

        if (!existBoard) {
            throw new AppError(BoardErrors.BOARD005);
        }

        const board = await boardService.delete(id);

        response.status(200).json(board);
    },

    findMobile: async function (request, response) {
        const userId = request.userId;
        const mobile = await boardService.findMobile();

        response.status(200).json(mobile)
    },
}