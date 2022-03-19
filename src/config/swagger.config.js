const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Prod Mais API",
            version: "1.0.0",
            description: "Gerenciador de tarefas"
        }
    },
    servers:[
        {
            url: `http://localhost:${process.env.PORT}`    
        }
    ],
    apis: []
}

module.exports = options;