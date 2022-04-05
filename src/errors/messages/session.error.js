const { httpErrors } = require("./http.errors");

module.exports = {
    SESSION001: {
        status: httpErrors.UNAUTHORIZED,
        message: "Email/senha inválidos!"
    }
}