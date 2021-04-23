//Exercício 11

//Testando com o valor de salário bruto 3mil

let bruteSalary = 3000;
let aliquotINSS;
let aliquotIR;
let taxesIr;
let inssDeductedSalary;

if (bruteSalary > 0) {
  if (bruteSalary <= 1556.94) {
    aliquotINSS = 0.08;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 1556.94 && bruteSalary <= 2594.92) {
    aliquotINSS = 0.09;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 2594.92 && bruteSalary <= 5189.82) {
    aliquotINSS = 0.11;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else {
    aliquotMaxInss = 570.88;
    inssDeductedSalary = bruteSalary - aliquotMaxInss;
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

  console.log ("Salário líquido: R$" + liquidSalary + ".");

} else {
  console.log ("ERRO!! Insiva um valor de salário válido.");
}


//Testando com o valor de salário bruto 4mil

bruteSalary = 4000;
aliquotINSS;
aliquotIR;
taxesIr;
inssDeductedSalary;

if (bruteSalary > 0) {
  if (bruteSalary <= 1556.94) {
    aliquotINSS = 0.08;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 1556.94 && bruteSalary <= 2594.92) {
    aliquotINSS = 0.09;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 2594.92 && bruteSalary <= 5189.82) {
    aliquotINSS = 0.11;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else {
    aliquotMaxInss = 570.88;
    inssDeductedSalary = bruteSalary - aliquotMaxInss;
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
  
  console.log ("Salário líquido: R$" + liquidSalary + ".");
  
} else {
  console.log ("ERRO!! Insiva um valor de salário válido.");
}

//Testando com o valor de salário inválido

bruteSalary = -1500;
aliquotINSS;
aliquotIR;
taxesIr;
inssDeductedSalary;

if (bruteSalary > 0) {
  if (bruteSalary <= 1556.94) {
    aliquotINSS = 0.08;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 1556.94 && bruteSalary <= 2594.92) {
    aliquotINSS = 0.09;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 2594.92 && bruteSalary <= 5189.82) {
    aliquotINSS = 0.11;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else {
    aliquotMaxInss = 570.88;
    inssDeductedSalary = bruteSalary - aliquotMaxInss;
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
  
  console.log ("Salário líquido: R$" + liquidSalary + ".");

} else {
  console.log ("ERRO!! Insiva um valor de salário válido.");
}

//Testando com o valor de salário bruto 3mil e já descontando os 17% da Trybe

bruteSalary = 3000;
payTrybe = 0.17;
aliquotINSS;
aliquotIR;
taxesIr;
inssDeductedSalary;

if (bruteSalary > 0) {
  if (bruteSalary <= 1556.94) {
    aliquotINSS = 0.08;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 1556.94 && bruteSalary <= 2594.92) {
    aliquotINSS = 0.09;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 2594.92 && bruteSalary <= 5189.82) {
    aliquotINSS = 0.11;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else {
    aliquotMaxInss = 570.88;
    inssDeductedSalary = bruteSalary - aliquotMaxInss;
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
  liquidSalary = (inssDeductedSalary - taxesIr) - (bruteSalary * payTrybe);
  
  console.log ("Salário líquido: R$" + liquidSalary + ".");
  
} else {
  console.log ("ERRO!! Insiva um valor de salário válido.");
}

//Testando com o valor de salário bruto 4mil e já descontando os 25% da Trybe

bruteSalary = 4000;
payTrybe = 0.25;
aliquotINSS;
aliquotIR;
taxesIr;
inssDeductedSalary;

if (bruteSalary > 0) {
  if (bruteSalary <= 1556.94) {
    aliquotINSS = 0.08;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 1556.94 && bruteSalary <= 2594.92) {
    aliquotINSS = 0.09;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 2594.92 && bruteSalary <= 5189.82) {
    aliquotINSS = 0.11;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else {
    aliquotMaxInss = 570.88;
    inssDeductedSalary = bruteSalary - aliquotMaxInss;
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
  liquidSalary = (inssDeductedSalary - taxesIr) - (bruteSalary * payTrybe);
  
  console.log ("Salário líquido: R$" + liquidSalary + ".");
  
} else {
  console.log ("ERRO!! Insiva um valor de salário válido.");
}

//Testando com o valor de salário bruto 6mil e já descontando os 30% da Trybe

bruteSalary = 6000;
payTrybe = 0.30;
aliquotINSS;
aliquotIR;
taxesIr;
inssDeductedSalary;

if (bruteSalary > 0) {
  if (bruteSalary <= 1556.94) {
    aliquotINSS = 0.08;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 1556.94 && bruteSalary <= 2594.92) {
    aliquotINSS = 0.09;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else if (bruteSalary > 2594.92 && bruteSalary <= 5189.82) {
    aliquotINSS = 0.11;
    inssDeductedSalary = bruteSalary * (1 - aliquotINSS);
  } else {
    aliquotMaxInss = 570.88;
    inssDeductedSalary = bruteSalary - aliquotMaxInss;
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
  liquidSalary = (inssDeductedSalary - taxesIr) - (bruteSalary * payTrybe);
  
  console.log ("Salário líquido: R$" + liquidSalary + ".");
  
} else {
  console.log ("ERRO!! Insiva um valor de salário válido.");
}