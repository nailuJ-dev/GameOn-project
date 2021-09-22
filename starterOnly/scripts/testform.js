// DOM Elements
const registerForm = document.querySelector('.registration-form');

// Functions to check the validity of datas'form
const getValueId = (id) => document.getElementById(id).value;
const getErrorMsg = (classError) => document.querySelector(classError);

// function to check string length
function checkString (input, error, extra) {
  if (input.trim().length < extra) {
    error.classList.remove('hidden');
    return false
  }
  return true
};

// function to check email validity
function checkEmail (input, error, regex) {
  if (regex.test(input) === false) {
    error.classList.remove('hidden');
    return false
  }
  return true
};

// function to check age
function checkBirthdate (input, error, regex) {
  if (regex.test(input) === false) {
    error.classList.remove('hidden');
    return false
  }
  return true
};

// function to check cities of tournaments
function checkCities (input, error) {
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked === false) {
      error.classList.remove('hidden');
      return false
    }
  }
};

// function to check terms and conditions
function checkTerms (input, error) {
  if (input.checked === false) {
    error.classList.remove('hidden');
    return false
  }
  return true
};

const inputObject = [
  { input: getValueId('first'), functiontest: checkString(), error: getErrorMsg('.firstnameErrorMessage'), extra: 2 },
  { input: getValueId('last'), functiontest: checkString(), error: getErrorMsg('.lastnameErrorMessage'), extra: 2 },
  { input: getValueId('email'), functiontest: checkEmail(), error: getErrorMsg('.emailErrorMessage'), regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
  { input: getValueId('birthdate'), functiontest: checkBirthdate(), error: getErrorMsg('.birthdateErrorMessage'), regex: /(19\d\d|20[0-3])(-\d\d){2}/ },
  { input: getValueId('quantity'), functiontest: checkString(), error: getErrorMsg('.quantityErrorMessage'), extra: 0 }, // Tournaments category
  { input: document.querySelectorAll('#citychoices .checkbox-input').value, functiontest: checkCities(), error: getErrorMsg('.citiesErrorMessage') },
  { input: getValueId('checkbox1'), functiontest: checkTerms(), error: getErrorMsg('.termsErrorMessage') }]


// Checking if all inputs are valid
const integralFormValid = () => checkString() && checkEmail() && checkBirthdate() && checkCities() && checkTerms()

// Events for submiting the form
registerForm.addEventListener('submit', function (event) {
  event.preventDefault()
  // if integralFormValid is true
  if (integralFormValid() === true) {
    modalBg.style.display = 'none';
    // Call and show the notification window to confirm
    showNotifValid();
    registerForm.reset();
  }
});