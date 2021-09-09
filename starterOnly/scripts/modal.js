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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = 'block';
}

// close modal form with the cross
document.getElementById('close_form').addEventListener('click', function (closeModal) {
  modalBg.style.display = 'none'
});