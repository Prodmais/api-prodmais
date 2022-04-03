const { UserService } = require("../services");
const {AppError} = require('../errors');
const { UserErrors } = require("../errors/messages");

module.exports = {
    create: async function(request, response, next) {
        const { name, email, password } = request.body;

        const data = {
            name,
            email,
            password
        }

        const emailExists = await UserService.findByEmail(email);
        
        if(emailExists){
            throw new AppError(UserErrors.USER001);
        }

        const user = await UserService.create(data);

        response.status(201).json(user);
    }
}