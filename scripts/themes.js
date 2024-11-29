let nav_text = document.querySelector("ul");

let normal_m = document.getElementById(("normal_m"));
let command_m = document.getElementById(("command_m"));
let insert_m = document.getElementById(("insert_m"));
let visual_m = document.getElementById(("visual_m"));


function toggleTheme() {

  // Toggle localStorage items based on the background 

  if (document.body.style.backgroundColor == "whitesmoke") {

    let bg = document.body.style.backgroundColor = "#342e37";
    let txt = document.body.style.color = "whitesmoke";

    let nm = normal_m.style.color = "lightblue";
    let cm = command_m.style.color = "lightblue";
    let im = insert_m.style.color = "lightgreen";
    let vm = visual_m.style.color = "pink";

    localStorage.setItem("background", bg)
    localStorage.setItem("text", txt)

    localStorage.setItem("normalModeText", nm)
    localStorage.setItem("commandModeText", cm)
    localStorage.setItem("insertModetext", im)
    localStorage.setItem("visualModetext", vm)

  }

  else {

    let bg = document.body.style.backgroundColor = "whitesmoke";
    let txt = document.body.style.color = "black";

    let nm = normal_m.style.color = "blue";
    let cm = command_m.style.color = "blue";
    let im = insert_m.style.color = "green";
    let vm = visual_m.style.color = "purple";


    localStorage.setItem("background", bg)
    localStorage.setItem("text", txt)

    localStorage.setItem("normalModeText", nm)
    localStorage.setItem("commandModeText", cm)
    localStorage.setItem("insertModetext", im)
    localStorage.setItem("visualModetext", vm)

  }
}

// On page load, add the background and text from the localStorage

document.addEventListener('DOMContentLoaded', () => {

  let bgc = localStorage.getItem("background");
  let text = localStorage.getItem("text")

  let normalMode = localStorage.getItem("normalModeText");
  let commandMode = localStorage.getItem("commandModeText");
  let insertMode = localStorage.getItem("insertModetext");
  let visualMode = localStorage.getItem("visualModetext");

  document.body.style.backgroundColor = bgc;
  document.body.style.color = text;

  normal_m.style.color = normalMode;
  command_m.style.color = commandMode;
  insert_m.style.color = insertMode;
  visual_m.style.color = visualMode;

  nav_text.style.color = "black";

})
