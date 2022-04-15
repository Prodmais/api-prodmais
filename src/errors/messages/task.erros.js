const { httpErrors } = require("./http.errors");

module.exports = {
    TASK001: {
        status: httpErrors.NOT_FOUND,
        message: "Tarefa não encontrada!"
    },
    TASK002: {
      status: httpErrors.INTERNAL_SERVER_ERROR,
      message: "Ocorreu um error no sistema!"
    },
    TASK003: {
      status: httpErrors.TIME_OUT,
      message: "Tempo excedido!"
    },
}