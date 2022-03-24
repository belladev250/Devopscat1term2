import { celebrate, Joi } from "celebrate";

export const askToken = Joi.object().keys({
    amount: Joi.number().min(100).required(),
    meter_number: Joi.number().min(100000).max(999999).required(),
})
export const paramToken = Joi.object().keys({
  token: Joi.number().min(1000000).max(99999999).required()
})