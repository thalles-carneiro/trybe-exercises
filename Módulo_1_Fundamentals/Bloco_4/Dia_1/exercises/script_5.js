//Exercício 5

//Testando valores válidos e que formem os ângulos de um triângulo

let degreeAngle1 = 30;
let degreeAngle2 = 60;
let degreeAngle3 = 90;

if (degreeAngle1 < 0 || degreeAngle2 < 0 || degreeAngle3 < 0) {
  console.log ("ERRO!!! Ângulo inválido. Insira um novo valor válido.")
} else if ((degreeAngle1 + degreeAngle2 + degreeAngle3) === 180) {
  console.log ("True")
} else {
  console.log ("False")
}

//Testando valores válidos e que não formem os ângulos de um triângulo

degreeAngle1 = 50;
degreeAngle2 = 80;
degreeAngle3 = 45;

if (degreeAngle1 < 0 || degreeAngle2 < 0 || degreeAngle3 < 0) {
  console.log ("ERRO!!! Ângulo inválido. Insira um novo valor válido.")
} else if ((degreeAngle1 + degreeAngle2 + degreeAngle3) === 180) {
  console.log ("True")
} else {
  console.log ("False")
}

//Testando um valor inválido

degreeAngle1 = 90;
degreeAngle2 = 60;
degreeAngle3 = -15;

if (degreeAngle1 < 0 || degreeAngle2 < 0 || degreeAngle3 < 0) {
  console.log ("ERRO!!! Ângulo inválido. Insira um novo valor válido.")
} else if ((degreeAngle1 + degreeAngle2 + degreeAngle3) === 180) {
  console.log ("True")
} else {
  console.log ("False")
}