const { UserService } = require("../services");
const { AppError } = require("../errors");
const { UserErrors } = require("../errors/messages");

module.exports = {
  create: async function (request, response) {
    const { name, email, password } = request.body;

    const data = {
      name,
      email,
      password,
    };

    const user = await UserService.create(data);

    response.status(201).json(user);
  },
  findById: async function (request, response) {
    const userId = request.userId;

    const user = await UserService.findById(userId);

    response.status(200).json(user);
  },
  update: async function (request, response) {
    const userId = request.userId;

    const email = request.body.email;

    if (email) {
      const emailExists = await UserService.findByEmail(email);

      if (emailExists && emailExists.id !== userId) {
        throw new AppError(UserErrors.USER001);
      }
    }

    const user = await UserService.update(userId, request.body);

    response.status(200).json(user);
  },
};
