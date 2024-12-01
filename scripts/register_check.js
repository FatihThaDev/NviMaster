let register_btn = document.getElementById('register_btn');

const validate = () => {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let email = document.getElementById('email').value;
  let passwordStrength = document.getElementById('password_weakness').innerText;
  let pwd = document.getElementById('hs-strong-password-with-indicator-and-hint').value;
  let pwd_repeat = document.getElementById('password_repeat').value;


  if (
    firstName.length > 1 && firstName.length <= 50 &&
    lastName.length > 1 && lastName.length <= 50 &&
    email.length > 10 && email.length <= 100 &&
    (passwordStrength === "Strong" || passwordStrength === "Very Strong" || passwordStrength === "Super Strong") &&
    pwd == pwd_repeat
  ) {
    document.getElementById('register_btn').disabled = false;
  } else {
    document.getElementById('register_btn').disabled = true;
  }
};

document.getElementById('first_name').addEventListener('input', validate);
document.getElementById('last_name').addEventListener('input', validate);
document.getElementById('email').addEventListener('input', validate);
document.getElementById('password_repeat').addEventListener('input', validate);
document.getElementById('hs-strong-password-with-indicator-and-hint').addEventListener('input', validate);
