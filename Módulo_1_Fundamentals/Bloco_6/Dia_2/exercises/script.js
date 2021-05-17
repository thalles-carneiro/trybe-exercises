const selectState = document.getElementById('input-state');
allStatesInfos();

let isValid = [];
let allInfoForm = {};
let allErrors = {};

const getForm = document.querySelector('form');
getForm.addEventListener('submit', (event) => {
  event.preventDefault();
  allValidations();
  showInfos();
});

//Gera as opções de escolha dos estados brasileiros
function allStatesInfos() {
  const allInitials = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];
  const allStatesOfBrazil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for (let index = 0; index < allStatesOfBrazil.length; index += 1) {
    const newState = document.createElement('option');
    newState.innerText = allStatesOfBrazil[index];
    newState.value = allInitials[index];
    selectState.appendChild(newState);
  }
}

//Validação do Nome
function isValidName() {
  const inputName = document.getElementById('input-name');
  const inputNameValue = inputName.value;
  if (!inputNameValue || inputNameValue.length > 40) {
    isValid.push(false);
    allErrors.name = 'Insira um nome válido.';
  } else {
    allInfoForm.name = inputNameValue;
    isValid.push(true);
  }
}


//Validação do Email
//Referência que utilizei para entender essa parte de validar usando regex para o e-mail
//https://www.regular-expressions.info/email.html
function isValidEmail() {
  const inputEmail = document.getElementById('input-email');
  const inputEmailValue = inputEmail.value;
  const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!inputEmailValue || inputEmailValue.length > 50 || !regexEmail.test(inputEmailValue)) {
    isValid.push(false);
    allErrors.email = 'Insira um e-mail válido.';
  } else {
    allInfoForm.email = inputEmailValue;
    isValid.push(true);
  }
}

//Validação do CPF
function isValidCpf() {
  const inputCpf = document.getElementById('input-cpf');
  const inputCpfValue = inputCpf.value;
  const regexCpf = /^[0-9]{11}$/;
  if (!inputCpfValue || !regexCpf.test(inputCpfValue)) {
    isValid.push(false);
    allErrors.cpf = 'Insira um CPF válido.';
  } else {
    allInfoForm.cpf = inputCpfValue;
    isValid.push(true);
  }
}

//Validação do Endereço
function isValidAddress() {
  const inputAddress = document.getElementById('input-address');
  const inputAddressValue = inputAddress.value;
  if (!inputAddressValue || inputAddressValue.length > 200) {
    isValid.push(false);
    allErrors.address = 'Insira um endereço válido.';
  } else {
    allInfoForm.address = inputAddressValue;
    isValid.push(true);
  }
}

//Validação da Cidade
function isValidCity() {
  const inputCity = document.getElementById('input-city');
  const inputCityValue = inputCity.value;
  if (!inputCityValue || inputCityValue.length > 28) {
    isValid.push(false);
    allErrors.city = 'Insira uma cidade válida.';
  } else {
    allInfoForm.city = inputCityValue;
    isValid.push(true);
  }
}

//Validação do Resumo do Currículo
function isValidCurriculumResume() {
  const inputCurriculumResume = document.getElementById('curriculum-resume');
  const inputCurriculumResumeValue = inputCurriculumResume.value;
  if (!inputCurriculumResumeValue || inputCurriculumResumeValue.length > 1000) {
    isValid.push(false);
    allErrors['curriculum-resume'] = 'Insira um resumo do currículo válido.';
  } else {
    allInfoForm['curriculum-resume'] = inputCurriculumResumeValue;
    isValid.push(true);
  }
}

//Validação da Descrição do Cargo
function isValidRole() {
  const inputRole = document.getElementById('input-role');
  const inputRoleValue = inputRole.value;
  if (!inputRoleValue || inputRoleValue.length > 40) {
    isValid.push(false);
    allErrors.role = 'Insira um cargo válido.';
  } else {
    allInfoForm.role = inputRoleValue;
    isValid.push(true);
  }
}

//Validação da Descrição do Cargo
function isValidRoleDescription() {
  const inputRoleDescription = document.getElementById('role-description');
  const inputRoleDescriptionValue = inputRoleDescription.value;
  if (!inputRoleDescriptionValue || inputRoleDescriptionValue.length > 500) {
    isValid.push(false);
    allErrors['role-description'] = 'Insira uma descrição para o cargo válida.';
  } else {
    allInfoForm['role-description'] = inputRoleDescriptionValue;
    isValid.push(true);
  }
}

//Validação da Data de Início
//Referência que utilizei para entender essa parte do regex
//https://www.regular-expressions.info/dates.html#:~:text=%5E(19%7C20)%5C,a%20choice%20of%20four%20separators.
function isValidStartRoleDate() {
  const inputStartRoleDate = document.getElementById('start-role-date');
  const inputStartRoleDateValue = inputStartRoleDate.value;
  const regexDate = /^(0[1-9]|1\d|2\d|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
  if(!regexDate.test(inputStartRoleDateValue)) {
    isValid.push(false);
    allErrors['start-role-date'] = 'Insira uma data válida.';
  } else {
    allInfoForm['start-role-date'] = inputStartRoleDateValue;
    isValid.push(true);
  }
}

//Efetuando todas as validações
function allValidations() {
  isValid = [];
  allInfoForm = {};
  allErrors = {};

  isValidName();
  isValidEmail();
  isValidCpf();
  isValidAddress();
  isValidCity();
  allInfoForm.state = selectState.value;
  const inputTypeHomeChecked = document.querySelector("input[checked]");
  allInfoForm['type-home'] = inputTypeHomeChecked.value;
  isValidCurriculumResume();
  isValidRole();
  isValidRoleDescription();
  isValidStartRoleDate();
}

//Cria uma função para mostrar na tela do usuários quais as informações que estão incorretas e as informações válidas
function showInfos() {
  if(!isValid.includes(false)) {
    const formInfoDiv = document.createElement('div');
    getForm.submit();
    showValidInfos(formInfoDiv);
  } else {
    const formErrorDiv = document.createElement('div');
    showErrors(formErrorDiv);
  }
}

//Cria um alert que mostra todos as informações válidas
function showValidInfos(infosDiv) {
  for(let info in allInfoForm) {
    infosDiv.innerHTML += `${allInfoForm[info]}\n`;
  }
  alert(infosDiv.innerText);
}

//Cria um alert que mostra todos os inputs que estão incorretos
function showErrors(errorDiv) {
  for(let erro in allErrors) {
    errorDiv.innerHTML += `${allErrors[erro]}\n`;
  }
  alert(errorDiv.innerText);
}