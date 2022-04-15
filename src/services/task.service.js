const { Task } = require('../database/models/index');
const { InternalError } = require('../errors');

module.exports = {
    create: async function(taskData) {
        const task = await Task.create(taskData);

        return task;
    },

    update: async function(id, taskData) {
        const [result, upTask] = await Task.update(taskData, {
          where:  {
            id
          },
        })
        .catch(err => console.log(err))

        return upTask;
    },

    listOne: async function (id, data) {
      const [result, showedTask] = await Task.listOne(data, {
        where: {
          id
        }
      })
    },

    listAll: async function() {

    },

    delete: async function (data, id) {
      const deletedTask = await Task.delete(date, {
        where: {
          id
        }
      })

      return deletedTask;
    }

 }