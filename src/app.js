require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('express-async-errors');

// Swagger configuration
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swagger.config');
const swaggerUi = require('swagger-ui-express');
const { UserRoutes, SessionRoutes, TaskRoutes, BoardRoutes } = require('./routes');
const { AppError } = require('./errors');

const app = express();

const specs = swaggerJsDoc(swaggerOptions);

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/", SessionRoutes);
app.use("/user", UserRoutes);
app.use("/board", BoardRoutes)
app.use("/board", TaskRoutes);

app.use((err, request, response, next) => {
    if (err instanceof AppError) {
        response.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message
        });
    } else {
        response.status(500).json(err);
    }
});

app.get('/', (request, response, next) => {
    response.send("<h1>Server is running on Deploy 🚀<h1>");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3000 🚀`);
});
