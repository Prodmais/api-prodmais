const express = require('express');
const app = express();

app.get('/', (request, response, next) => {
    response.send("<h1>Server is running on Deploy 🚀<h1>");
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000 🚀`);
});
