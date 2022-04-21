const { httpErrors } = require("./http.errors");

module.exports = {
    BOARD001: {
        status: httpErrors.INTERNAL_SERVER_ERROR,
        message: "Falha na criação do quadro!"
    },
}