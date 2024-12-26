
let button = document.querySelector('#retrieve_btn');
let dataContainer = document.querySelector('#data_container');
let notExists = document.querySelector('#not-exists');



button.addEventListener('click', async function getFighterData() {

  let img = document.querySelector('#fighter_image');
  let firstName = document.querySelector('#first_name_input').value.toLowerCase();
  let lastName = document.querySelector('#last_name_input').value.toLowerCase();


  img.src = '';
  document.getElementById('name').innerText = '';
  document.getElementById('wins').innerText = '';
  document.getElementById('losses').innerText = '';
  dataContainer.style.display = 'none';
  notExists.style.display = 'none';


  try {
    let response = await fetch('https://api.octagon-api.com/fighters');
    let data = await response.json();


    img.src = '';
    document.getElementById('name').innerText = '';
    document.getElementById('wins').innerText = '';
    document.getElementById('losses').innerText = '';

    let fighterKey = `${firstName}-${lastName}`;

    if (data[fighterKey]) {

      img.src = data[fighterKey].imgUrl;
      document.getElementById('name').innerText = data[fighterKey].name;

      if (data[fighterKey].nickname && data[fighterKey].nickname !== '<empty string>') {
        document.getElementById('nickname').innerText = data[fighterKey].nickname;
      }
      else {
        document.getElementById('nickname').innerText = 'No nickname';
      }

      document.getElementById('fightingStyle').innerText = data[fighterKey].fightingStyle;
      document.getElementById('height').innerText = (data[fighterKey].height * 2.54).toFixed(2) + " cm";
      document.getElementById('weight').innerText = (data[fighterKey].weight * 0.45359237).toFixed(2) + " kg";
      document.getElementById('wins').innerText = data[fighterKey].wins;
      document.getElementById('losses').innerText = data[fighterKey].losses;
      dataContainer.style.display = 'flex';

    }

    else {
      notExists.style.display = 'block';
    }

  }

  catch (error) {
    console.error('There was an error in retrieving data: ' + error);
    notExists.style.display = 'block';
  }
});

