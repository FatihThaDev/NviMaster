let form = document.querySelector('#loginForm');
let email_field = document.querySelector('#email');
let password_field = document.querySelector('#password');
let username_field = document.querySelector('#username');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  if (form.checkValidity()) {
    try {
      let response = await fetch('../data/users.json');
      let data = await response.json();

      const newUser = {
        email: email_field.value,
        password: password_field.value,
        username: username_field.value
      };

      data.users.push(newUser);

      if (response.ok) {
        localStorage.setItem("email", newUser.email);
        localStorage.setItem("password", newUser.password);
        localStorage.setItem("username", newUser.username);

        window.location.href = "../index.html#home";
      }
      else {
        alert("Error saving user data. Please try again.");
        form.reset();
      }
    }
    catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  }
  else {
    form.classList.add('was-validated');
  }
});
