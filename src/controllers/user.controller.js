const { UserService } = require("../services");
const { AppError } = require("../errors");
const { UserErrors } = require("../errors/messages");
const { compare } = require("bcryptjs");
const boardService = require("../services/board.service");
const { sequelize } = require("../database/models");

module.exports = {
  create: async function (request, response) {
    const { name, email, password } = request.body;

    const t = await sequelize.transaction();

    try {
      const data = {
        name,
        email,
        password,
      };

      const user = await UserService.create(data, t);

      const boardData = {
        userId: user.id,
        name: "Mobile",
        description: "Quadro mobile",
        isMobile: true,
      }

      await boardService.create(boardData, t);

      response.status(201).json(user);

      await t.commit();
    } catch (err) {
      await t.rollback();
      console.log(err);
      throw new AppError(err);
    }
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

  updatePassword: async function (request, response) {
    const userId = request.userId;

    const { password, new_password } = request.body;

    const user = await UserService.findById(userId);

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError(UserErrors.USER007);
    }

    const result = await UserService.updatePassword(userId, new_password);

    response.status(200).json(result);
  },

  delete: async function (request, response) {
    const userId = request.userId;

    await UserService.delete(userId);

    response.status(200).json("Success");
  },

  restore: async function (request, response) {
    const { email } = request.body;

    const userExist = await UserService.findByEmail(email);

    if (!userExist) {
      throw new AppError(UserErrors.USER002);
    }

    await UserService.restore(email);

    response.status(200).json("Success");
  },
};
