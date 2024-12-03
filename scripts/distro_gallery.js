let menu = document.getElementById("hamburger-menu");
let nav = document.getElementById("nav");


menu.addEventListener("click", () => {
  if (nav.style.display == "none") {
    nav.style.display = "block";
  }
  else {
    nav.style.display = "none";
  }
}
)
