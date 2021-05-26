//Parte I - Game Actions Simulator

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//1 - Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonAtk = (dragon) => {
  const minDmg = 15;
  const maxDmg = dragon.strength;
  const dragonDmg = Math.round(Math.random() * (maxDmg - minDmg) + minDmg);
  return dragonDmg;
};

//2 - Crie uma função que retorna o dano causado pelo warrior .
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorAtk = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const warriorDmg = Math.round(Math.random() * (maxDmg - minDmg) + minDmg);
  return warriorDmg;
};

//3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageAtk = (mage) => {
  if (mage.mana < 15) {
    return {
      mageDmg: 'Não possui mana suficiente',
      usedMana: 0,
    };
  };
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const mageDmg = Math.round(Math.random() * (maxDmg - minDmg) + minDmg);
  const usedMana = 15;
  return {
    mageDmg,
    usedMana,
  };
};

//Parte II

const gameActions = {
  //1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
  warriorTurn: (callbackWarrior) => {
    battleMembers.dragon.healthPoints -= callbackWarrior(warrior);
    battleMembers.warrior.damage = callbackWarrior(warrior);
  },
  
  //2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
  mageTurn: (callbackMage) => {
    battleMembers.dragon.healthPoints -= callbackMage(mage).mageDmg;
    battleMembers.mage.damage = callbackMage(mage).mageDmg;
    battleMembers.mage.mana -= callbackMage(mage).usedMana;
  },

  //3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
  dragonTurn: (callbackDragon) => {
    battleMembers.warrior.healthPoints -= callbackDragon(dragon);
    battleMembers.mage.healthPoints -= callbackDragon(dragon);
    battleMembers.dragon.damage = callbackDragon(dragon);
  },

  //4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
  turnResults: () => battleMembers,
};

//1 - Turno do Guerreiro
gameActions.warriorTurn(warriorAtk);
//2 - Turno do Mago
gameActions.mageTurn(mageAtk);
//3 - Turno do Dragão
gameActions.dragonTurn(dragonAtk);
//4 - Resultados do Turno
console.log(gameActions.turnResults());