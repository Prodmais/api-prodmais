const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (request, response, next) => {
    response.send("<h1>Server is running on Deploy 🚀<h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port 3000 🚀`);
});
