require('dotenv').config();
const express = require('express');
const app = express();

// Swagger configuration
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swagger.config');
const swaggerUi = require('swagger-ui-express');
const { UserRoutes } = require('./routes');

const specs = swaggerJsDoc(swaggerOptions);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (request, response, next) => {
    response.send("<h1>Server is running on Deploy 🚀<h1>");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/user", UserRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3000 🚀`);
});
