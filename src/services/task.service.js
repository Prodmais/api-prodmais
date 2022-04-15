const { Tasks } = require('../database/models/index');
const { InternalError } = require('../errors');
const { TaskErrors } = require('../errors/messages');

module.exports = {
    create: async function(taskData) {
        const task = await Tasks.create(taskData);

        return task;
    },

    update: async function(id) {
        const upTask = await Tasks.update( {
          where:  {
            id
          },
        })
        .catch(err => console.log(err))

        await upTask.save()

        return upTask;
    },

    findById: async function(id) {
      const task = await Tasks.findOne({
          where: {
              id,
          }
      }).catch(err => {
          console.log(err);
          throw new InternalError(TaskErrors.TASK002);
      }); 

      return task;
    },

    listAll: async function(id) {
      const tasks = await Tasks.findAll({raw: true}).catch(err => {
          console.log(err);
          throw new InternalError(TaskErrors.TASK002);
      }); 

      return tasks;
    },

    delete: async function (id) {
      const deletedTask = await Tasks.delete({
        where: {
          id
        }
      }).catch(err => {
        console.log(err)
      })

      return deletedTask;
    }
}