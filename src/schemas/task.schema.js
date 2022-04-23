const Joi = require("joi");
const { string, number } = Joi.types();

module.exports = {
  create: Joi.object({
    name: string.required(),
    description: string.optional(),
    status: number.min(1).max(3).required(),
    boardId: number.required(),
  }),
  update: Joi.object({
    id: number.required(),
    name: string.required(),
    description: string.optional(),
    status: number.min(1).max(3).required(),
    boardId: number.required(),
  }),
  findOne: Joi.object({
    id: number.required(),
    boardId: number.required()
  }),
  delete: Joi.object({
    id: number.required(),
    boardId: number.required(),
  }),
};
