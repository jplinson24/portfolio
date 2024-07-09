document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
      if (!emailPattern.test(email)) {
        showMessage('Please enter a valid email address.');
        return;
      }
  
      fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      })
      .then(response => {
        if (response.ok) {
          showMessage('Email sent successfully!');
        } else {
          showMessage('Failed to send email. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Failed to send email:', error);
        showMessage('Failed to send email. Please try again later.');
      });
    });
  
    function showMessage(message) {
      const popupMessage = document.getElementById('popup-message');
      const popupText = document.getElementById('popup-text');
      popupText.textContent = message;
      popupMessage.classList.remove('hidden');
      popupMessage.classList.add('visible');
    }
  
    document.getElementById('close-popup').addEventListener('click', function () {
      const popupMessage = document.getElementById('popup-message');
      popupMessage.classList.remove('visible');
      popupMessage.classList.add('hidden');
    });
  });
  