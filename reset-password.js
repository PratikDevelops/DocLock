document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('pTV87sASgMu5Dxtyj'); 
    const resetForm = document.getElementById('reset-password-form');
    const resetMessage = document.getElementById('reset-message');

    resetForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

       

        emailjs.send('service_k58alx8', 'reset_password_template', { email })
            .then(response => {
                resetMessage.textContent = 'A password reset link has been sent to your email.';
            })
            .catch(error => {
                console.error('Error sending email:', error);
                resetMessage.textContent = 'Failed to send password reset email.';
            });
    });
});
