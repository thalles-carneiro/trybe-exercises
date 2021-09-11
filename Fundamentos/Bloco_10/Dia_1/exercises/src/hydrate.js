// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

function hydrate(string) {
  const glassesOfWater = string.match(/[0-9]/g)
    .reduce((sum, num) => sum + (+num), 0);
  if (glassesOfWater === 1) return '1 copo de água';
  return `${glassesOfWater} copos de água`;
}

module.exports = hydrate;