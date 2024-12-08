
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






let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");

const showModal = src => {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modalImg.src = src;
}

const closeModal = () => {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}






let images = document.querySelectorAll(".object-cover");
let distro_search = document.querySelector("#distro-search");
let desc = document.querySelector("#description-area");


async function getImageData() {
  try {
    let response = await fetch('../image_data.json');
    let data = await response.json();

    distro_search.addEventListener('input', () => {
      switch (distro_search.value.toLowerCase()) {
        case "lazyvim":
          desc.classList.remove('hidden');
          desc.classList.add('block');
          desc.innerText = data[2].description;
          break;

        case "nvchad":
          desc.classList.remove('hidden');
          desc.classList.add('block');
          desc.innerText = data[3].description;
          break;

        case "astronvim":
          desc.classList.remove('hidden');
          desc.classList.add('block');
          desc.innerText = data[5].description;
          break;

        default:
          desc.classList.add('hidden');
          break
      }
    });
  }

  catch (error) {
    console.error("There was an error in displaying data from JSON file: " + error)
  }
}
getImageData();


