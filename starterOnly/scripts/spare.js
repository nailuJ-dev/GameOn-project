// DOM Elements
const registerForm = document.querySelector('.registration-form');

// To copy & paste if minimalist check doesn't go well

function checkFirstName () {
  const firstInput = document.getElementById('first').value;
  const firstErrorMsg = document.querySelector('.firstnameErrorMessage');
  const firstValid = firstInput.trim().length >= 2;
  if (firstValid) {
    firstErrorMsg.classList.add('hidden');
  } else {
    firstErrorMsg.classList.remove('hidden');
  }
  return firstValid;
}

function checkLastName () {
  const lastInput = document.getElementById('last').value;
  const lastErrorMsg = document.querySelector('.lastnameErrorMessage');
  const LastValid = lastInput.trim().length >= 2;

  if (LastValid) {
    lastErrorMsg.classList.add('hidden');
  } else {
    lastErrorMsg.classList.remove('hidden');
  }
  return LastValid;
}

function checkEmail () {
  const emailInput = document.getElementById('email').value;
  const regExEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailErrorMsg = document.querySelector('.emailErrorMessage');
  const emailValid = regExEmail.test(emailInput)

  if (emailValid) {
    emailErrorMsg.classList.add('hidden')
  } else {
    emailErrorMsg.classList.remove('hidden')
  }
  return emailValid
}

function checkBirthdate () {
  const birthdateInput = document.getElementById('birthdate').value;
  const regExAge = /(19\d\d|20[0-3])(-\d\d){2}/;
  const birthdateErrorMsg = document.querySelector('.birthdateErrorMessage');
  const birthdateValid = regExAge.test(birthdateInput);

  if (birthdateValid) {
    birthdateErrorMsg.classList.add('hidden');
  } else {
    birthdateErrorMsg.classList.remove('hidden')
  }
  return birthdateValid
}

function checkTournament () {
  const quantityInput = document.getElementById('quantity').value;
  const tournamentErrorMsg = document.querySelector('.quantityErrorMessage');
  const quantityValid = quantityInput.length > 0;

  if (quantityValid) {
    tournamentErrorMsg.classList.add('hidden');
  } else {
    tournamentErrorMsg.classList.remove('hidden')
  }
  return quantityValid
}

function checkCities () {
  const CitiesChoices = document.querySelectorAll('#citychoices .checkbox-input');
  const CitiesErrorMsg = document.querySelector('.citiesErrorMessage');
  let CitiesValid = false;

  for (let i = 0; i < CitiesChoices.length; i++) {
    if (CitiesChoices[i].checked) {
      CitiesErrorMsg.classList.add('hidden');
      CitiesValid = true;
      break
    } else {
      CitiesErrorMsg.classList.remove('hidden');
    }
  }
  return CitiesValid
}

function checkTerms () {
  const terms = document.getElementById('checkbox1')
  const termsErrorMsg = document.querySelector('.termsErrorMessage');
  const termsValid = terms.checked;

  if (termsValid) {
    termsErrorMsg.classList.add('hidden');
  } else {
    termsErrorMsg.classList.remove('hidden');
  }
  return termsValid
}

function fieldFormControl () {
  checkFirstName()
  checkLastName()
  checkEmail()
  checkBirthdate()
  checkTournament()
  checkCities()
  checkTerms()
}

function integralFormValid () {
  if (checkFirstName() === true &&
    checkLastName() === true &&
    checkEmail() === true &&
    checkBirthdate() === true &&
    checkTournament() === true &&
    checkCities() === true &&
    checkTerms() === true) {
    return true;
  }
  return false;
}

// Events for submiting the form
registerForm.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('shit');
  if (integralFormValid() === true) {
    showNotifValid();
    registerForm.reset();
  } else {
    fieldFormControl();
  }
});
