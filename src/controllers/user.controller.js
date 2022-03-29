const { UserService } = require("../services");

module.exports = {
    async create(request, response, next) {
        const { name, email, password } = request.body;

        const data = {
            name,
            email,
            password
        }

        const user = await UserService.create(data);

        response.status(201).json(user);
    }
}