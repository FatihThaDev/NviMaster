document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem("username") || !localStorage.getItem("email") || !localStorage.getItem("password")) {
    window.location.href = "./views/login.html";
  }
})
