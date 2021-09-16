// Const for checking the validity of form
const regExEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regExBirthdate = /(19\d\d|20[0-3])(-\d\d){2}/;

// DOM Elements
const $registerForm = document.querySelector('.registration-form');
const modalBg = document.querySelector('.bground');

// Functions to check the validity of datas'form

// Checking firstname
function checkFirstN() {
  let firstInput = document.getElementById('first').value;
  let $firstnameErrorMessage = document.querySelector('.firstnameErrorMessage');
  let firstNameValid = firstInput.trim().length >= 2;
  if (firstNameValid) {
    $firstnameErrorMessage.classList.add('hidden');
  } else {
    $firstnameErrorMessage.classList.remove('hidden');
  }
  return firstNameValid;
}

// Checking lastname
function checkLastN() {
  let lastInput = document.getElementById('last').value;
  let $lastnameErrorMessage = document.querySelector('.lastnameErrorMessage');
  let lastNameValid = lastInput.trim().length >= 2;
  if (lastNameValid) {
    $lastnameErrorMessage.classList.add('hidden');
  } else {
    $lastnameErrorMessage.classList.remove('hidden');
  }
  return lastNameValid;
}

// Checking Email
function checkEmail() {
  let emailInput = document.getElementById('email').value;
  let $emailErrorMessage = document.querySelector('.emailErrorMessage');
  let emailValid = regExEmail.test(emailInput);
  if (emailValid) {
    $emailErrorMessage.classList.add('hidden');
  } else {
    $emailErrorMessage.classList.remove('hidden');
  }
  return emailValid;
}

// Checking Age
function checkBirthdate() {
  let birthdateInput = document.getElementById('birthdate').value;
  let $birthdateErrorMessage = document.querySelector('.birthdateErrorMessage');
  let birthdateValid = regExBirthdate.test(birthdateInput);
  if (birthdateValid) {
    $birthdateErrorMessage.classList.add('hidden');
  } else {
    $birthdateErrorMessage.classList.remove('hidden');
  }
  return birthdateValid;
}

// Checking number of tournaments
function checkQuantity() {
  let quantityInput = document.getElementById('quantity').value;
  let $quantityErrorMessage = document.querySelector('.quantityErrorMessage');
  let quantityValid = quantityInput.length > 0;
  if (quantityValid) {
    $quantityErrorMessage.classList.add('hidden');
  } else {
    $quantityErrorMessage.classList.remove('hidden');
  }
  return quantityValid;
}


// Checking cities of tournaments
function checkCities() {
  let $citiesRadio = document.querySelectorAll('#citychoices .checkbox-input');
  let $citiesErrorMessage = document.querySelector('.citiesErrorMessage');
  let citiesValid = false;
  for (let i = 0; i < $citiesRadio.length; i++) {
    if ($citiesRadio[i].checked) {
      $citiesErrorMessage.classList.add('hidden');
      citiesValid = true;
      break
    } else {
      $citiesErrorMessage.classList.remove('hidden');
    }
  }
  return citiesValid
}

// Checking terms and conditions
function checkTerms() {
  let termsInput = document.getElementById('terms-checkbox');
  let $termsErrorMessage = document.querySelector('.termsErrorMessage');
  let termsValid = termsInput.checked;
  if (termsValid) {
    $termsErrorMessage.classList.add('hidden');
  } else {
    $termsErrorMessage.classList.remove('hidden');
  }
  return termsValid
}

// Checking if all inputs are valid
const integralFormValid = () => checkFirstN() && checkLastN() && checkEmail() && checkBirthdate() && checkQuantity() && checkCities() && checkTerms()

// Events for submiting the form
$registerForm.addEventListener('submit', function (event) {
  event.preventDefault()
  // if integralFormValid is true
  if (integralFormValid()) {
    modalBg.style.display = 'none';
    // Call and show the notification window to confirm
    showNotifValid();
    $registerForm.reset();
  }
});