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
let scalarValue = document.getElementById("minmax-range").value;

const showModal = src => {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modalImg.src = src;
}

const closeModal = () => {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

const scaleModal = () => {
  console.log("Scalar value is: " + scalarValue);
  modalImg.classList.remove('max-w-[800px]');
  modalImg.classList.add(`max-w-[${scalarValue}px]`);
}
