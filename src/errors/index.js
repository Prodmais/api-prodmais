class AppError extends Error{
        constructor(message){
            super(message);
            this.statusCode = message.status;
            this.message = message.message;
        }
}

class JoiValidatorError extends AppError{
    constructor(message){
        super(message);
        this.message = message.message;
        this.statusCode = 400;
    }
}

class InternalError extends AppError{
    constructor(message){
        super(message);
        this.message = message.message;
        this.statusCode = 500;
    }
}

module.exports = {AppError, JoiValidatorError, InternalError};
