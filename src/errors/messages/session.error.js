const { httpErrors } = require("./http.errors");

module.exports = {
    SESSION001: {
        status: httpErrors.UNAUTHORIZED,
        message: "Email/senha inválidos!"
    },
    SESSION002: {
        status: httpErrors.FORBIDDEN,
        message: "Token não foi enviado!"
    },
    SESSION003: {
        status: httpErrors.UNAUTHORIZED,
        message: "Token inválido!"
    }
}