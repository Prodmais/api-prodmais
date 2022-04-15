const { httpErrors } = require("./http.errors");

module.exports = {
    TASK001: {
        status: httpErrors.NOT_FOUND,
        message: "Tarefa não encontrada!"
    },
    TASK002: {
      status: httpErrors.INTERNAL_SERVER_ERROR,
      message: "Falha na busca pela tarefa!"
    },
    TASK003: {
      status: httpErrors.INTERNAL_SERVER_ERROR,
      message: "Falha na criação da tarefa!"
    },
    TASK004: {
      status: httpErrors.INTERNAL_SERVER_ERROR,
      message: "Falha na atualização da tarefa!"
    },
    TASK005: {
      status: httpErrors.INTERNAL_SERVER_ERROR,
      message: "Falha na exclusão da tarefa!"
    },
    
}