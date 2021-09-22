// DOM elements
const closeThxBg = document.getElementById('closeThx')
const closeButtonThxBg = document.querySelector('.buttonThx');

// Notification window to thank the registration
function showNotifValid() {
    modalBg.style.display = 'none';
    thxBg.style.display = 'block';
}

// Function to close th thank notification window
function closeNotif() {
    modalBg.style.display = 'none';
    thxBg.style.display = 'none';
}

// Event close thank notification
closeThxBg.addEventListener('click', closeNotif);
closeButtonThxBg.addEventListener('click', closeNotif);
