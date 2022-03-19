const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swagger.config');
const swaggerUi = require('swagger-ui-express');
const app = express();

const port = process.env.PORT || 3000

const specs = swaggerJsDoc(swaggerOptions);

app.get('/', (request, response, next) => {
    response.send("<h1>Server is running on Deploy 🚀<h1>");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
    console.log(`Server is running on port 3000 🚀`);
});
