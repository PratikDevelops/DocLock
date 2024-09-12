document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("pTV87sASgMu5Dxtyj");

  const registerForm = document.getElementById("register-form");
  const registerMessage = document.getElementById("register-message");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.username === username || u.email === email
    );

    if (existingUser) {
      registerMessage.textContent = "Username or email already exists.";
    } else {
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      emailjs
        .send("service_k58alx8", "template_lwr7iea", {
          to_email: email,
          username: username,
        })
        .then((response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          registerMessage.innerHTML =
            'Registration successful! Please <a href="login.html">login</a>.';
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          registerMessage.textContent = "Failed to send registration email.";
        });
    }
  });
});
