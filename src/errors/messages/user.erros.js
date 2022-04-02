const { httpErrors } = require("./http.errors");

module.exports = {
    USER001: {
        status: httpErrors.BAD_REQUEST,
        message: "Já existe um usuário com este email!"
    },
    USER002: {
        status: httpErrors.NOT_FOUND,
        message: "Usuário não encontrado!"
    },
}