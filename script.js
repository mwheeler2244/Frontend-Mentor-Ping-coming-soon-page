document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const errorMessage = document.getElementById('error-message');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Clear any previous error messages
        errorMessage.textContent = '';

        // Get the email input value
        const email = document.getElementById('email').value;

        // Check if email is empty
        if (email.trim() === '') {
            errorMessage.textContent = 'Email field cannot be empty.';
            return;
        }

        // Check if email is valid using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        // If validation passes, show success message
        notification.textContent = 'Form submitted successfully!';
        notification.style.display = 'block';

        // Hide the notification after 3 seconds (3000 milliseconds)
        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000);

        // Reset the form after successful submission
        form.reset();
    });
});
