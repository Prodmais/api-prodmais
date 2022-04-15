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
};
