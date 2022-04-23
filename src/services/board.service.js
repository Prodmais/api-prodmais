const { Boards } = require('../database/models/index');
const { Op } = require('sequelize');
const { InternalError } = require('../errors');
const { BoardErrors } = require('../errors/messages');

module.exports = {
    create: async function (data, transaction) {
        const board = await Boards.create(data, { transaction: transaction }).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD001);
        });

        return board;
    },

    update: async function (id, data) {
        console.log(id, data)
        const [result, board] = await Boards.update(data, {
            where: {
                id,
            },
            returning: true
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

    findMobile: async function (userId) {
        const mobile = await Boards.findOne({
            where: {
                isMobile: true,
                userId
            }
        }).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD003);
        });

        return mobile;
    }
}