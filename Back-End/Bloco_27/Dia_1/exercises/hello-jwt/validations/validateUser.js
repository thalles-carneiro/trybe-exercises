const Joi = require('joi');

module.exports = ({ username, password }) => (
  Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5).required(),
  }).validate({ username, password })
);