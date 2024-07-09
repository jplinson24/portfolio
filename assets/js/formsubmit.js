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
      const templateID = 'template_yourTemplateID'; // Your EmailJS template ID
  
      const params = {
        name: document.getElementById('name').value,
        email: email,
        message: document.getElementById('message').value,
      };
  
      emailjs.send(serviceID, templateID, params)
        .then(function(response) {
          alert('SUCCESS!', response.status, response.text);
        }, function(error) {
          alert('FAILED...', error);
        });
    });
  });
  