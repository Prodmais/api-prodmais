class AppError {
  constructor(message) {
    this.message = message.message;
    this.statusCode = message.status ? message.status : 400;
  }
}

class JoiValidatorError extends AppError {
  constructor(message) {
    super(message);
    this.message = message.message;
    this.statusCode = message.statusCode ? message.statusCode : 400;
  }
}

class InternalError extends AppError {
  constructor(message) {
    super(message);
    this.message = message.message;
    this.statusCode = message.statusCode ? message.statusCode : 500;
  }
}

module.exports = { AppError, JoiValidatorError, InternalError };
