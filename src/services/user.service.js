const { Users } = require('../database/models/index');

module.exports = {
    create: async function(userData) {
        const user = await Users.create(userData);

        return user;
    }
}