// DOM Elements
const registerForm = document.querySelector('.registration-form');

// Functions to check the validity of datas'form
const getValueId = (id) => document.getElementById(id).value;
const getErrorMsg = (classError) => document.querySelector(classError);

const inputObject = [
  { input: document.getElementById('first').value.trim().length, functionTest: () => checkString(), error: document.querySelector('.firstnameErrorMessage'), extra: 2 },
  { input: document.getElementById('last').value.trim().length, functionTest: () => checkString(), error: document.querySelector('.lastnameErrorMessage'), extra: 2 },
  { input: document.getElementById('email').value, functionTest: () => checkEmail(), error: document.querySelector('.emailErrorMessage'), extra: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
  { input: document.getElementById('birthdate').value, functionTest: () => checkBirthdate(), error: document.querySelector('.birthdateErrorMessage'), extra: /(19\d\d|20[0-3])(-\d\d){2}/ },
  { input: document.getElementById('quantity').value, functionTest: () => checkString(), error: document.querySelector('.quantityErrorMessage'), extra: 0 }, // Tournaments category
  { input: document.querySelectorAll('#citychoices .checkbox-input').checked, functionTest: () => checkCities(), error: document.querySelector('.citiesErrorMessage') },
  { input: document.getElementById('checkbox1').checked, functionTest: () => checkTerms(), error: document.querySelector('.termsErrorMessage') }]


// function to check string length
function checkString (input, error, extra) {
  if (input > extra && input !== '') {
    return true
  } else {
    error.classList.remove('hidden');
    return false
  }
};

// function to check email validity
function checkEmail (input, error, extra) {
  if (extra.test(input) === false) {
    error.classList.remove('hidden');
    return false
  }
  return true
};

// function to check age
function checkBirthdate (input, error, extra) {
  if (extra.test(input) === false) {
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

// Checking if all inputs are valid
        // const integralFormValid = () => checkString() && checkEmail() && checkBirthdate() && checkCities() && checkTerms()

/* let integralFormValid = false

inputObject.forEach(function (items) {
  if (items.functionTest === true) {
    integralFormValid = true
    console.log('fais chier')
  } else {
    console.log('merdebis');
  }
});
*/

// Or const integralFormValid = Object.values(inputObject).filter(functiontest === true)

// Events for submiting the form
registerForm.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('shit');
  // if integralFormValid is true
  inputObject.forEach(function (items) {
    if (items.functionTest(items.input, items.error, items.extra) === true) {
      console.log('fuck it')
      showNotifValid();
      registerForm.reset();
    } else {
      console.log('fuck off');
    }
  });
});
