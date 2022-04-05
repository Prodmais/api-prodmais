const Joi = require("joi");
const { string, number } = Joi.types();

module.exports = {
  create: Joi.object({
    name: string.required(),
    email: string
      .email({ tlds: { allow: false } })
      .required(),
    password: string.min(6).required(),
  }),
  update: Joi.object({
    id: number.required(),
    name: string.required(),
    email: string
      .email({ tlds: { allow: false } })
      .required(),
    password: string.min(6).required(),
  }),
};
