const Joi = require("joi");
const { string, number } = Joi.types();

module.exports = {
  create: Joi.object({
    name: string.required(),
    description: string,
    status: string.required()
  }),
  update: Joi.object({
    id: number.required(),
    name: string.required(),
    description: string,
    status: string.required()
  }),
  findOne: Joi.object({
    id: number.required(),
  }),
  delete: Joi.object({
    id: number.required(),
  }),
};
