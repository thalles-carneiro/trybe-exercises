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

console.log(dragonAtk(dragon));
console.log(warriorAtk(warrior));
console.log(mageAtk(mage));