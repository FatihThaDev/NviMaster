let register_btn = document.getElementById('register_btn');

const validate = () => {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let email = document.getElementById('email').value;
  let passwordStrength = "";
  let pwd = document.getElementById('password').value;
  let pwd_repeat = document.getElementById('password_repeat').value;

  let has_upper = false, has_lower = false, has_num = false, has_symbol = false, has_6_chars = false;
  const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";


  for (let char of pwd) {
    if ("abcdefghijklmnopqrstuvwxyz".includes(char)) {
      has_lower = true;
    }
    else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)) {
      has_upper = true;
    }
    else if ("1234567890".includes(char)) {
      has_num = true;
    }
    else if (symbols.includes(char)) {
      has_symbol = true;
    }
  }

  if (pwd.length >= 6) {
    has_6_chars = true;
  }

  if (has_lower || has_upper) {
    passwordStrength = "Weak";
  }
  if (has_lower && has_upper) {
    passwordStrength = "Moderate";
  }
  if (has_lower && has_upper && has_6_chars) {
    passwordStrength = "Strong";
  }
  if (has_lower && has_upper && has_6_chars && has_num) {
    passwordStrength = "Very Strong";
  }
  if (has_lower && has_upper && has_6_chars && has_num && has_symbol) {
    passwordStrength = "Super Strong";
  }

  document.getElementById('password_weakness').innerText = passwordStrength;

  if (
    firstName.length > 1 && firstName.length <= 50 &&
    lastName.length > 1 && lastName.length <= 50 &&
    email.length > 10 && email.length <= 100 &&
    (passwordStrength === "Strong" || passwordStrength === "Very Strong" || passwordStrength === "Super Strong") &&
    pwd === pwd_repeat
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
document.getElementById('password').addEventListener('input', validate);
