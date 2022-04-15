const { TaskService } = require("../services");
const {AppError} = require('../errors');
const { TaskErrors } = require("../errors/messages");

module.exports = {
    create: async function(request, response, next) {
        const { name, description, status } = request.body;

        const data = {
            name,
            description,
            status,
        }

        const task = await TaskService.create(data);

        response.status(201).json(task);
    },
    update: async function(request, response, next) {
      const { name, description, status } = request.body;

      const data = {
        name,
        description,
        status,
      }

      const task = await TaskService.update(data);

      response.status(201).json(task);
    }
}