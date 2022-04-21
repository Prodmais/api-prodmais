const { Tasks } = require('../database/models/index');
const { InternalError } = require('../errors');
const { TaskErrors } = require('../errors/messages');

module.exports = {
  create: async function (taskData) {
    const task = await Tasks.create(taskData).catch(err => {
      console.log(err);
      throw new InternalError(TaskErrors.TASK003);
    });

    return task;
  },

  update: async function (id, data) {
    const [result, task] = await Tasks.update(data, {
      where: {
        id,
        userId: data.userId
      },
      returning: true
    }).catch(err => {
      console.log(err);
      throw new InternalError(TaskErrors.TASK004);
    });

    if (result !== 1) {
      throw new InternalError(TaskErrors.TASK004);
    }

    return task[0].dataValues;
  },

  findById: async function (id, userId) {
    const task = await Tasks.findOne({
      where: {
        id,
        userId
      },
    }).catch(err => {
      console.log(err);
      throw new InternalError(TaskErrors.TASK002);
    });

    return task;
  },

  findAll: async function (id) {
    const tasks = await Tasks.findAll({
      where: { userId: id },
      raw: true
    }).catch(err => {
      console.log(err);
      throw new InternalError(TaskErrors.TASK002);
    });

    return tasks;
  },

  delete: async function (id, userId) {
    return await Tasks.destroy({
      where: {
        id,
        userId
      },

    }).catch(err => {
      console.log(err);
      throw new InternalError(TaskErrors.TASK005);
    })
  }
}