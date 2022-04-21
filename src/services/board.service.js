const { Op } = require('sequelize/types');
const { Boards } = require('../database/models/index');
const { BoardErrors } = require('../errors/messages');

module.exports = {
    create: async function (data) {
        const board = await Boards.create(data).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD001);
        });

        return board;
    },

    update: async function (id, data) {
        const [result, board] = await Boards.update(data, {
            where: {
                id,
            }
        }).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD002);
        });

        if (result !== 1) {
            throw new InternalError(BoardErrors.BOARD002);
        }

        return board[0].dataValues;
    },

    delete: async function (id) {
        return await Boards.destroy({
            where: {
                id,
                isMobile: {
                    [Op.ne]: true
                }
            }
        }).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD003);
        });
    },

    findById: async function (id, userId) {
        const board = await Boards.findOne({
            where: {
                id,
                userId
            },
        }).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD004);
        });

        return board;
    },

    findAll: async function (id) {
        const board = await Boards.findAll({
            where: { userId: id },
            raw: true
        }).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD004);
        });

        return board;
    },
}