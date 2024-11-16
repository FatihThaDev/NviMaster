let images = document.querySelectorAll(".conf_image");

function imageToggle() {

  for (let i = 0; i <= images.length; i++) {
    if (images[i].style.width == "500px" && images[i].style.height == "300px") {
      images[i].style.width = "105%";
      images[i].style.height = "90%";
      images[i].style.transition = "1900ms";
    }

    else {
      images[i].style.width = "500px";
      images[i].style.height = "300px";
    }
  }

}


