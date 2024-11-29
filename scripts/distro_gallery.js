let menu = document.querySelector("#hamburger-menu");
let nav = document.querySelector("#nav");

menu.addEventListener("click", () => {
  if (nav.style.display == "none") {
    nav.style.display = "block";
  }
  else {
    if (document.body.style.width > 1023) {
      nav.style.display = "block";
    }
    else {
      nav.style.display = "none";
    }
  }
})
