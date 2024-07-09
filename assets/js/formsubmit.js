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

        const serviceID = 'service_q87exwa'; // Your EmailJS service ID
        const templateID = 'template_e6azwo9'; // Your EmailJS template ID

        const params = {
            name: document.getElementById('name').value,
            email: email,
            message: document.getElementById('message').value,
        };

        console.log('Sending email with the following parameters:', params);

        emailjs.send(serviceID, templateID, params)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                showMessage('Email sent successfully!');
            }, function(error) {
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
