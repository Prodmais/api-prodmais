const { Users } = require('../database/models/index');

module.exports = {
    create: async function(userData) {
        const user = await Users.create(userData);

        return user;
    },
    findByEmail: async function(email) {
        const user = await Users.findOne({
            where: {
                email,
            }
        }); 

        return user;
    }
 }