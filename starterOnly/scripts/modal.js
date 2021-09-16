function editNav() {
  let x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += 'responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalBg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const thxBg = document.querySelector('.bground-thx');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = 'block';
}

// close modal form with the cross
document.getElementById('close_form').addEventListener('click', function (closeModal) {
  modalBg.style.display = 'none';
  thxBg.style.display = 'none';
});

// close modal form and thank notification with button
document.querySelector('.button-thx').addEventListener('click', function (closeModal) {
  modalBg.style.display = 'none';
  thxBg.style.display = 'none';
});

// variables for tests 
const getSomeId = document.form.getElementById(nameId);
const getSomeClass = document.querySelector(nameClass);
let testResult = false;
let value = getSomeId.value;
let nameErrorMessage = "Veuillez entrer deux caractères ou plus dans ce champ";
let emailErrorMessage = "Veuillez entrer une adresse mail valide dans ce champ";
let birthdateErrorMessage = "Vous devez renseigner votre date de naissance";
let termsErrorMessage = "Vous devez accepter les termes et conditions d'utilisation";
let quantityErrorMessage = "Veuillez renseigner un nombre de tournoi";
let cityErrorMessage = "Veuillez cocher une des villes proposées";

let variableFormArray = [getSomeId('first'), getSomeId('last'), getSomeId('email'), getSomeId('birthdate'), getSomeId('quantity')];
let citiesFormArray =[getSomeId('location1').checked, getSomeId('location2'), getSomeId('location3'), getSomeId('location4'), getSomeId('location5'), getSomeId('location6')];
let errorFormArray =[getSomeClass('.firstnameErrorMessage'), getSomeClass('.lastnameErrorMessage'), getSomeClass('.emailErrorMessage'), getSomeClass('.birthdateErrorMessage'), getSomeClass('.numberErrorMessage'), getSomeClass('.citiesErrorMessage'), getSomeClass('.termsErrorMessage')]

let emailRegex = 

let testValidity = false ;

for (let i=0; i < variableFormArray.length; i++) {
  let parameterTest = variableFormArray[i].value;
  if (i < 2) {
    if (parameterTest.length) {
      parameterTest.trim().length >= 2;
    return parameterTest = true;
    }
  break
  }
  if (i = 2) {
    
  }


  if(parameterTestValid) {
  }
};