const { AppError } = require("../errors");
const sessionError = require("../errors/messages/session.error");
const { verify } = require("jsonwebtoken");

function isAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(sessionError.SESSION002);
  }

  const [, token] = request.headers.authorization.split(" ");

  try {
    const decodeToken = verify(token, process.env.JWT_SECRET);

    request.userId = decodeToken.userId;

    return next();
  } catch (err) {
    console.log(err);
    throw new AppError(sessionError.SESSION003);
  }
}

module.exports = isAuthenticated;
