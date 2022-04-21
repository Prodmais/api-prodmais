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
    update: Joi.object({
        id: number.required(),
        name: string.required(),
        description: string.optional(),
    }),
    delete: Joi.object({
        id: number.required(),
    }),
}