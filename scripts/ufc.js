let firstName = document.querySelector('#first_name_input').value.toLowerCase();
let lastName = document.querySelector('#last_name_input').value.toLowerCase();
let dataContainer = document.querySelector('#data_container');
let button = document.querySelector('#retrieve_btn');
let img = document.querySelector('#fighter_image');

button.addEventListener('click', async function getFighterData() {
  try {

    let response = await fetch('https://api.octagon-api.com/fighters');
    let data = await response.json();

    console.log(data[`${firstName}-${lastName}`]);


    img.src = data[`${firstName}-${lastName}`].imgUrl;
    document.getElementById('name').innerText = data[`${firstName}-${lastName}`].name;
    document.getElementById('wins').innerText = data[`${firstName}-${lastName}`].wins;
    document.getElementById('losses').innerText = data[`${firstName}-${lastName}`].losses;


  }
  catch (error) {
    console.error('There was an error in retrieving data: ' + error);
  }


});

