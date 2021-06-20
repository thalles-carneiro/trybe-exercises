//Exercício 10

//Testando com valores válidos

let productCost = 10;
let sellValue = 20;

let taxOverCost = productCost * 0.2;
let totalCostValue = productCost + taxOverCost;
let unitProfit = sellValue - totalCostValue;
let totalProfit = unitProfit * 1000;

if (productCost < 0 || sellValue < 0) {
  console.log ("ERRO!! Insira valores válidos.")
} else {
  console.log ("A empresa terá um lucro total de R$" + totalProfit + ".");
}


//Testando com valor

productCost = 100;
sellValue = -25;

taxOverCost = productCost * 0.2;
totalCostValue = productCost + taxOverCost;
unitProfit = sellValue - totalCostValue;
totalProfit = unitProfit * 1000;

if (productCost < 0 || sellValue < 0) {
  console.log ("ERRO!! Insira valores válidos.");
} else {
  console.log ("A empresa terá um lucro total de R$" + totalProfit + ".");
}

//Testando com valores válidos e com novo imposto

productCost = 20;
sellValue = 50;

let taxes = 0.3;
taxOverCost = productCost * taxes;
totalCostValue = productCost + taxOverCost;
unitProfit = sellValue - totalCostValue;
totalProfit = unitProfit * 1000;

if (productCost < 0 || sellValue < 0) {
  console.log ("ERRO!! Insira valores válidos.");
} else {
  console.log ("A empresa terá um lucro total de R$" + totalProfit + ".");
}


