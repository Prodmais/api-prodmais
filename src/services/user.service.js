const { Users } = require('../database/models/index');
const { InternalError } = require('../errors');

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
        }).catch(err => {
            throw new InternalError(err);
        }); 

        return user;
    }
 }