let nav_items = document.querySelectorAll('.navlinks');

document.addEventListener('DOMContentLoaded', () => {
  nav_items.forEach(item => {
    if (document.contains(document.querySelector('.subtitles')) && item) {
      nav_items[0].classList.add("nav_active");
    }

    if (document.contains(document.querySelector('.rounded-lg'))) {
      nav_items[1].classList.add("nav_active");
    }

    if (document.contains(document.querySelector('.question'))) {
      nav_items[2].classList.add("nav_active");
    }

    if (document.contains(document.querySelector('#fighter_image'))) {
      nav_items[3].classList.add("nav_active");
    }

    if (document.contains(document.querySelector('#visible3'))) {
      nav_items[4].classList.add("nav_active");
    }
  })
})

nav_items[0].addEventListener('click', () => {
  nav_items[0].classList.add("nav_active");
  nav_items[1].classList.remove("nav_active");
  nav_items[2].classList.remove("nav_active");
  nav_items[3].classList.remove("nav_active");
  nav_items[4].classList.remove("nav_active");
})
nav_items[1].addEventListener('click', () => {
  nav_items[1].classList.add("nav_active");
  nav_items[0].classList.remove("nav_active");
  nav_items[2].classList.remove("nav_active");
  nav_items[3].classList.remove("nav_active");
  nav_items[4].classList.remove("nav_active");
})
nav_items[2].addEventListener('click', () => {
  nav_items[2].classList.add("nav_active");
  nav_items[0].classList.remove("nav_active");
  nav_items[1].classList.remove("nav_active");
  nav_items[3].classList.remove("nav_active");
  nav_items[4].classList.remove("nav_active");
})
nav_items[3].addEventListener('click', () => {
  nav_items[3].classList.add("nav_active");
  nav_items[0].classList.remove("nav_active");
  nav_items[1].classList.remove("nav_active");
  nav_items[2].classList.remove("nav_active");
  nav_items[4].classList.remove("nav_active");
})
nav_items[4].addEventListener('click', () => {
  nav_items[4].classList.add("nav_active");
  nav_items[0].classList.remove("nav_active");
  nav_items[1].classList.remove("nav_active");
  nav_items[2].classList.remove("nav_active");
  nav_items[3].classList.remove("nav_active");
})
