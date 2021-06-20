//Exercícios Bônus

//Exercício 1
function convertRomanNumerals(romanNumeral) {
  let romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;
  let romanNumeralsArray = romanNumeral.split('');
  let valuesArray = [];
  for (let index of romanNumeralsArray) {
    for (let key in romanNumerals) {
      if (key === index) {
        valuesArray.push(romanNumerals[key]);
      };
    };
  };
  if (valuesArray.length === 1) {
    result = valuesArray[0];
  };
  for (let iteration = 1; iteration < valuesArray.length; iteration += 1) {
    for (let currentValue = 0; currentValue < iteration; currentValue += 1) {
      if (iteration === 1) {
        if (valuesArray[iteration] <= valuesArray[currentValue]) {
          result = valuesArray[currentValue] + valuesArray[iteration];
        } else {
          result = valuesArray[iteration] - valuesArray[currentValue];
        };
      } else {
        if (valuesArray[iteration] < result) {
          result = result + valuesArray[iteration];
          break;
        } else {
          result = valuesArray[iteration] - result;
          break;
        };
      };
    };
  };
  return result;
};

console.log(convertRomanNumerals('I'));
console.log(convertRomanNumerals('IV'));
console.log(convertRomanNumerals('V'));
console.log(convertRomanNumerals('IX'));
console.log(convertRomanNumerals('X'));
console.log(convertRomanNumerals('XL'));
console.log(convertRomanNumerals('L'));
console.log(convertRomanNumerals('XC'));
console.log(convertRomanNumerals('C'));
console.log(convertRomanNumerals('CD'));
console.log(convertRomanNumerals('D'));
console.log(convertRomanNumerals('CM'));
console.log(convertRomanNumerals('M'));
