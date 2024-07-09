document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Basic email validation
      const email = document.getElementById('email').value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      const serviceID = 'service_jjs71ki'; // Your EmailJS service ID
      const templateID = 'template_e6azwo9'; // Your EmailJS template ID
  
      const params = {
        name: document.getElementById('name').value,
        email: email,
        message: document.getElementById('message').value,
      };
  
      emailjs.send(serviceID, templateID, params)
        .then(function(response) {
          showSuccessMessage();
        }, function(error) {
          alert('FAILED...', error);
        });
    });
  
    function showSuccessMessage() {
      const successMessage = document.getElementById('success-message');
      successMessage.classList.remove('hidden');
      successMessage.classList.add('visible');
      setTimeout(() => {
        successMessage.classList.remove('visible');
        successMessage.classList.add('hidden');
      }, 5000); // Hide message after 5 seconds
    }
  });
  