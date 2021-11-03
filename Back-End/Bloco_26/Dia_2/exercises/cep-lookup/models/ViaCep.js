const axios = require('axios');

const lookupCep = async (cepToSearch) => {
  const { data } = await axios(`https://viacep.com.br/ws/${cepToSearch}/json/`);

  if(data.erro) return null;

  return data;
};

module.exports = {
  lookupCep,
};