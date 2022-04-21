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
}