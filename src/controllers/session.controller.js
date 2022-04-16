const { UserService } = require("../services");
const { AppError } = require("../errors");
const { SessionErrors } = require("../errors/messages");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

module.exports = {
  login: async function (request, response, next) {
    const { email, password } = request.body;

    const user = await UserService.findByEmail(email, true);

    if (!user) {
      throw new AppError(SessionErrors.SESSION001);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError(SessionErrors.SESSION001);
    }

    const token = sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }

    response.status(200).json(data);
  },
};
