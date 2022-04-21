const Joi = require("joi");
const { string, boolean, number } = Joi.types();

module.exports = {
    create: Joi.object({
        name: string.required(),
        description: string.optional(),
        isMobile: boolean.optional(),
    }),
    findOne: Joi.object({
        id: number.required(),
    }),
}