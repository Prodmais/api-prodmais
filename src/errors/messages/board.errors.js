const { httpErrors } = require("./http.errors");

module.exports = {
    BOARD001: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na criação do quadro!"
    },
    BOARD002: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na atualização do quadro!"
    },
    BOARD003: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na exclusão do quadro!"
    },
    BOARD004: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na busca do quadro!"
    },
    BOARD005: {
        status: httpErrors.NOT_FOUND,
        message: "Quadro não encontrado!"
    },
    BOARD006: {
        status: httpErrors.NOT_FOUND,
        message: "Já existe um quadro mobile!"
    },
}