const Joi = require("joi");
const { string } = Joi.types();

module.exports = {
  login: Joi.object({
    email: string.required(),
    password: string.required(),
  }),
};
