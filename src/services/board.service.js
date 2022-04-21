const { Boards } = require('../database/models/index');
const { BoardErrors } = require('../errors/messages');

module.exports = {
    create: async function (data) {
        const board = await Boards.create(data).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD001);
        });
        task
        return board;
    },

    findById: async function(id, userId) {
        const board = await Boards.findOne({
          where: {
              id,
              userId
          },
        }).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD002);
        }); 
  
        return board;
      },
  
      findAll: async function(id) {
        const board = await Boards.findAll({
          where: { userId: id},
          raw: true
        }).catch(err => {
            console.log(err);
            throw new InternalError(BoardErrors.BOARD002);
        });
  
        return board;
      },
}