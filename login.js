document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
   


    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
          
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'dashboard.html'; 
        } else {
           
            errorMessage.textContent = 'Invalid username or password.';
        }
    });

    
});
