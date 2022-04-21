const Joi = require("joi");
const { string, boolean } = Joi.types();

module.exports = {
    create: Joi.object({
        name: string.required(),
        description: string.optional(),
        isMobile: boolean.optional(),
    }),
}