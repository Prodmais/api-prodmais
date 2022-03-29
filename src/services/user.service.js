const { Users } = require('../database/models/index');

module.exports = {
    async create(userData) {
        const user = await Users.create(userData);

        return user;
    }
}