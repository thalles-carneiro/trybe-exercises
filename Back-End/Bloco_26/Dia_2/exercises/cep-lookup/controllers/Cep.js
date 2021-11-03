const rescue = require('express-rescue');
const Joi = require('joi');
const Cep = require('../services/Cep');

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await Cep.findAddressByCep(cep);

  if (address.error) return next(address.error);

  return res.status(200).json(address);
});

const create = rescue(async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/^\d{5}-?\d{3}$/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const newAddress = await Cep.create({ cep, logradouro, bairro, localidade, uf });

  if (newAddress.error) return next(newAddress.error);

  res.status(201).json(newAddress)
});

module.exports = {
  findAddressByCep,
  create,
};