const Cep = require('../models/Cep');
const ViaCep = require('../models/ViaCep');

const CEP_REGEX = /^\d{5}-\d{3}$/;

const findAddressByCep = async (cep) => {
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  const address = await Cep.findAddressByCep(cep);

  if (address) return address;

  const addressFromApi = await ViaCep.lookupCep(cep);

  if (!addressFromApi) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return Cep.create(addressFromApi);
};

const create = async ({ cep, ...addressParams }) => {
  const existingCep = await Cep.findAddressByCep(cep);

  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existe',
      },
    };
  }

  return Cep.create({ cep, ...addressParams });
};

module.exports = {
  findAddressByCep,
  create,
};