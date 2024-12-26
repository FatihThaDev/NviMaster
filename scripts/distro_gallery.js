// JS for toggling modal
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



// JS for loading distro descriptions from JSON file
let distro_search = document.querySelector("#distro-search");
let desc = document.querySelector("#description-area");
let distro_name = document.querySelector("#distro_name");
let change_desc = document.querySelector('#change_desc');
let delete_desc = document.querySelector('#delete_desc');


async function getImageData() {
  try {
    let response = await fetch('../data/image_data.json');
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

    change_desc.addEventListener('click', () => {
      let new_desc = prompt("Enter the description you want for the distro(first, make sure the description is present on the page):", "");

      if (new_desc !== null) {
        desc.innerText = new_desc;

        toastr.success("Description has been updated!");
      }
      else {
        toastr.error("The description was not updated, because you clicked cancel!");
      }
    });

    delete_desc.addEventListener('click', () => {

      desc.innerText = "";
      toastr.warning("Description is deleted!");

    });
  }

  catch (error) {
    console.error("There was an error in displaying data from JSON file: " + error)
  }
}
getImageData();


