const { Users } = require('../database/models/index');
const { hash } = require('bcryptjs');
const { InternalError, AppError } = require('../errors');
const { UserErrors } = require('../errors/messages');

module.exports = {
    create: async function (userData) {

        const emailExists = await this.findByEmail(userData.email);

        if (emailExists) {
            throw new AppError(UserErrors.USER001);
        }

        const hashPassword = await hash(userData.password, 10);

        userData.password = hashPassword;

        const user = await Users.create(userData).catch(err => {
            console.log(err);
            throw new InternalError(UserErrors.USER003);
        });

        return user;
    },
    findByEmail: async function (email) {
        const user = await Users.findOne({
            where: {
                email,
            }
        }).catch(err => {
            console.log(err);
            throw new InternalError(UserErrors.USER004);
        });

        return user;
    },
    findById: async function (id) {
        const user = await Users.findOne({
            where: {
                id,
            }
        }).catch(err => {
            console.log(err);
            throw new InternalError(UserErrors.USER004);
        });

        return user;
    },
    update: async function (id, data) {
        const [result, user] = await Users.update(data, {
            where: {
                id
            },
            returning: true
        }).catch(err => {
            console.log(err);
            throw new InternalError(UserErrors.USER005);
        });

        if (result !== 1) {
            throw new InternalError(UserErrors.USER005);
        }

        return user[0].dataValues;
    },
    updatePassword: async function (id, password) {

        const hashPassword = await hash(password, 10);

        const [result] = await Users.update({ password: hashPassword }, {
            where: {
                id
            }
        }).catch(err => {
            console.log(err);
            throw new InternalError(UserErrors.USER005);
        });

        if (result !== 1) {
            throw new InternalError(UserErrors.USER005);
        }

        return result;
    }
}