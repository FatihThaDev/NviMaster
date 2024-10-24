let images = document.querySelectorAll(".conf_image");
let nav_text = document.querySelector("ul");
let normal_m = document.getElementById(("normal_m"));
let command_m = document.getElementById(("command_m"));
let insert_m = document.getElementById(("insert_m"));
let visual_m = document.getElementById(("visual_m"));

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

function toggleTheme() {
  if (document.body.style.backgroundColor == "whitesmoke") {
    document.body.style.backgroundColor = "#342e37";
    document.body.style.color = "whitesmoke";
    nav_text.style.color = "black";
    normal_m.style.color = "lightblue";
    command_m.style.color = "lightblue";
    insert_m.style.color = "lightgreen";
    visual_m.style.color = "pink";
  }
  else {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
    normal_m.style.color = "blue";
    command_m.style.color = "blue";
    insert_m.style.color = "green";
    visual_m.style.color = "purple";
  }
}
