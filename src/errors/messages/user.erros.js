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
    USER003: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na criação de usuário!"
    },
    USER004: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na busca por usuário!"
    },
    USER005: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na atualização das informações do usuário!"
    },
    USER006: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na atualização da senha do usuário!"
    },
    USER007: {
        status: httpErrors.BAD_REQUEST,
        message: "Senha incorreta!"
    },
}