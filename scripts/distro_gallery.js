let menu = document.querySelector("#hamburger-menu");
let nav = document.querySelector("#nav");

// This needs fixing. When nav is invisible on mobile, it should be visile on PC.
menu.addEventListener("click", () => {
  if (nav.style.display == "none") {
    nav.style.display = "block";
  }
  else {
    nav.style.display = "none";
  }
}
)
