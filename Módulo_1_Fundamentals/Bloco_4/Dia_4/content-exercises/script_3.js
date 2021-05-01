//Exercício de Fixação - Funções

//1. Adição
function addition(num1, num2) {
  let addition = num1 + num2;
  return addition;
};
console.log('Soma:', addition(-12, 3));
console.log();

//1. Subtração
function subtraction(num1, num2) {
  let subtraction = num1 - num2;
  return subtraction;
};
console.log('Subtração:', subtraction(1, 7));
console.log();

//1. Multiplicação
function multiplication(num1, num2) {
  let multiplication = num1 * num2;
  return multiplication;
};
console.log('Multiplicação:', multiplication(11, 8));
console.log();

//1. Divisão
function division(num1, num2) {
  let division = num1 / num2;
  return division;
};
console.log('Divisão:', division(35, 2));
console.log();

//1. Módulo
function modulus(num1, num2) {
  let modulus = num1 % num2;
  return modulus;
};
console.log('Módulo:', modulus(19, 5));
console.log();

//2. Maior entre dois números
function higherBetweenTwoNumbers(num1, num2) {
  let higherNumber;
  let printResult;
  if (num1 > num2) {
    higherNumber = num1;
    printResult = `O número ${higherNumber} é o maior.`;
  } else if (num2 > num1) {
    higherNumber = num2;
    printResult = `O número ${higherNumber} é o maior.`;
  } else {
    printResult = 'Os números são iguais.';
  };
  return printResult;
};
console.log('Maior entre dois números:', higherBetweenTwoNumbers(7, 7));
console.log();

//3. Maior entre três números
function higherBetweenThreeNumbers(num1, num2, num3) {
  let higherNumber;
  let printResult;
  if (num1 > num2 && num1 > num3) {
    higherNumber = num1;
    printResult = `O número ${higherNumber} é o maior.`;
  } else if (num2 > num1 && num2 > num3) {
    higherNumber = num2;
    printResult = `O número ${higherNumber} é o maior.`;
  } else if (num3 > num1 && num3 > num2) {
    higherNumber = num3;
    printResult = `O número ${higherNumber} é o maior.`;
  } else {
    printResult = 'Os três números são iguais.';
  };
  return printResult;
};
console.log('Maior entre três números:', higherBetweenThreeNumbers(-12, 0, -4));
console.log();

//4. Positivo ou negativo
function positiveOrNegative(number) {
  let printResult;
  if (number > 0) {
    printResult = 'Positive';
  } else if (number < 0) {
    printResult = 'Negative';
  } else {
    printResult = 'Zero';
  };
  return printResult;
};
console.log('Positivo ou negativo:', positiveOrNegative(9));
console.log();

//5. Define se os três ângulos internos do triângulo são válidos
function validTriangleAngles(degreeAngle1, degreeAngle2, degreeAngle3) {
  let printResult;
  if (degreeAngle1 < 0 || degreeAngle2 < 0 || degreeAngle3 < 0) {
    printResult = 'ERRO!!! Ângulo inválido. Insira um novo valor válido.';
  } else if ((degreeAngle1 + degreeAngle2 + degreeAngle3) === 180) {
    printResult = 'True';
  } else {
    printResult = 'False';
  };
  return printResult;
};
console.log('Ângulos internos válidos de um triângulo:', validTriangleAngles(-30, 60, 90));
console.log();

//6. Informa os movimentos de uma peça de xadrez
function chessPieceMovement(chessPiece) {
  let printResult;
  switch (chessPiece.toLowerCase()) {
    case 'rei':
      printResult = 'Rei - Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa.';
      break;
    case 'rainha':
      printResult = 'Rainha - Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais.';
      break;
    case 'bispo':
      printResult = 'Bispo - Sem restrição de número de casas, mas somente no sentido diagonal.';
      break;
    case 'cavalo':
      printResult = 'Cavalo - Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.';
      break;
    case 'torre':
      printResult = 'Torre - Pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).';
      break;
    case 'peão':
      printResult = 'Peão - Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.';
      break;
    default:
      printResult = 'ERRO!!! A peça informada não existe. Insira um nome de peça válido.';
  };
  return printResult;
};
console.log('Movimentos da peça de xadrez:', chessPieceMovement('rainha'));
console.log();

//7. Converte nota dada em porcentagem em conceitos de A a F
function convertPercentageToGrade(percentage) {
  let printGrade = 0;
  if (percentage < 0 || percentage > 100) {
    printGrade = 'ERRO!!! A nota não é válida. Insira uma nota válida.';
  } else if (percentage >= 90) {
    printGrade = 'Nota A';
  } else if (percentage >= 80) {
    printGrade = 'Nota B';
  } else if (percentage >= 70) {
    printGrade = 'Nota C';
  } else if (percentage >= 60) {
    printGrade = 'Nota D';
  } else if (percentage >= 50) {
    printGrade = 'Nota E';
  } else {
    printGrade = 'Nota F';
  };
  return printGrade;
};
console.log('Conceitos de A a F:', convertPercentageToGrade(91));
console.log();

//8. Verifica se pelo menos um dos três números é par
function evenBetweenThreeNumbers(num1, num2, num3) {
  let isEven = false;
  if ((num1 % 2) === 0 || (num2 % 2) === 0 || (num3 % 2) === 0) {
    isEven = true;
  };
  return isEven;
};
console.log ('Algum dos três números é par:', evenBetweenThreeNumbers(7, 12, 19));
console.log();

//9. Verifica se pelo menos um dos três números é ímpar
function oddBetweenThreeNumbers(num1, num2, num3) {
  let isOdd = true;
  if ((num1 % 2) === 0 && (num2 % 2) === 0 && (num3 % 2) === 0) {
    isOdd = false;
  };
  return isOdd;
};
console.log ('Algum dos três números é ímpar:', oddBetweenThreeNumbers(6, 10, 18));
console.log();

//10. Calcula quanto de lucro ao vender mil produtos
function profitThousandProduts(productCost, sellValue) {
  let taxOverCost = productCost * 0.2;
  let totalCostValue = productCost + taxOverCost;
  let unitProfit = sellValue - totalCostValue;
  let totalProfit = unitProfit * 1000;
  let printResult;
  if (productCost < 0 || sellValue < 0) {
    printResult = 'ERRO!! Insira valores válidos.';
  } else {
    printResult = `A empresa terá um lucro total de R$ ${totalProfit.toFixed(2)}.`;
  }
  return printResult;
};
console.log ('Lucro ao vender mil produtos:', profitThousandProduts(30, 50));
console.log();

//11. Calcula o salário líquido, já descontando IR e INSS
function liquidSalary(baseSalary) {
  let aliquotINSS;
  let aliquotIR;
  let taxesIr;
  let inssDeductedSalary;
  let printLiquidSalary;
  if (baseSalary > 0) {
    if (baseSalary <= 1556.94) {
      aliquotINSS = 0.08;
      inssDeductedSalary = baseSalary * (1 - aliquotINSS);
    } else if (baseSalary > 1556.94 && baseSalary <= 2594.92) {
      aliquotINSS = 0.09;
      inssDeductedSalary = baseSalary * (1 - aliquotINSS);
    } else if (baseSalary > 2594.92 && baseSalary <= 5189.82) {
      aliquotINSS = 0.11;
      inssDeductedSalary = baseSalary * (1 - aliquotINSS);
    } else {
      aliquotMaxInss = 570.88;
      inssDeductedSalary = baseSalary - aliquotMaxInss;
    }
    if (inssDeductedSalary <= 1903.98) {
      aliquotIR = 0;
      taxesDeductIr = 0;
    } else if (inssDeductedSalary > 1903.99 && inssDeductedSalary <= 2826.65) {
      aliquotIR = 0.075;
      taxesDeductIr = 142.80;
    } else if (inssDeductedSalary > 2826.66 && inssDeductedSalary <= 3751.05) {
      aliquotIR = 0.15;
      taxesDeductIr = 354.80;
    } else if (inssDeductedSalary > 3751.06 && inssDeductedSalary <= 4664.68) {
      aliquotIR = 0.225;
      taxesDeductIr = 636.13;
    } else if (inssDeductedSalary > 4664.68) {
      aliquotIR = 0.275;
      taxesDeductIr = 869.36;
    }
    taxesIr = (inssDeductedSalary * aliquotIR) - taxesDeductIr;
    liquidSalary = inssDeductedSalary - taxesIr;
    printLiquidSalary = `Salário líquido: R$ ${liquidSalary.toFixed(2)}.`;
  } else {
    printLiquidSalary = 'ERRO!! Insiva um valor de salário válido.';
  }
  return printLiquidSalary;
};
console.log ('Calcula o salário líquido, descontando IR e INSS:', liquidSalary(4000));
console.log();
