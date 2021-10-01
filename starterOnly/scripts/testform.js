// DOM Elements
const registerForm = document.querySelector('.registration-form')

// function to check string length
function checkString (input, error, extra) {
  if (input.length > extra) {
    return true
  }
  error.classList.remove('hidden')
  return false
};

// function to check email validity
function checkEmail (input, error, extra) {
  if (input) {
    if (extra.test(input)) {
      return true
    }
  }
  error.classList.remove('hidden')
  return false
};

// function to check age
function checkBirthdate (input, error, extra) {
  if (input) {
    if (extra.test(input)) {
      return true
    }
  }
  error.classList.remove('hidden')
  return false
};

// function to check cities of tournaments
function checkCities (input, error) {
  const res = [...input].filter(function (e) { return e.checked }).length
  if (!res) {
    error.classList.remove('hidden')
    return false
  }
  return true
};

// function to check terms and conditions
function checkTerms (input, error) {
  if (input.checked) {
    return true
  }
  error.classList.remove('hidden')
  return false
};

// Events for submiting the form
registerForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const inputObject = [
    { input: document.getElementById('first').value, functionTest: checkString, error: document.querySelector('.firstnameErrorMessage'), extra: 1 },
    { input: document.getElementById('last').value, functionTest: checkString, error: document.querySelector('.lastnameErrorMessage'), extra: 1 },
    { input: document.getElementById('email').value, functionTest: checkEmail, error: document.querySelector('.emailErrorMessage'), extra: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
    { input: document.getElementById('birthdate').value, functionTest: checkString, error: document.querySelector('.birthdateErrorMessage'), extra: 9 },
    { input: document.getElementById('quantity').value, functionTest: checkString, error: document.querySelector('.quantityErrorMessage'), extra: 0 }, // Tournaments category
    { input: document.querySelectorAll('#citychoices .checkbox-input'), functionTest: checkCities, error: document.querySelector('.citiesErrorMessage') },
    { input: document.getElementById('checkbox1'), functionTest: checkTerms, error: document.querySelector('.termsErrorMessage') }
  ]

  let functionCount = 0

  inputObject.forEach(function (items) {
    if (items.functionTest(items.input, items.error, items.extra)) {
      items.error.classList.add('hidden')
      functionCount++
      if (functionCount === inputObject.length) {
        showNotifValid()
        registerForm.reset()
      }
    }
  })
})
