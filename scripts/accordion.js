let title1 = document.querySelector('#visible1');
let title2 = document.querySelector('#visible2');
let content1 = document.querySelector('#togglable1');
let content2 = document.querySelector('#togglable2');

let arrow_icon1 = document.querySelector("#arrow1");
let arrow_icon2 = document.querySelector("#arrow2");




title1.addEventListener('click', () => {
  if (content1.classList.contains('hidden')) {

    setTimeout(() => {
      content1.classList.remove('hidden');
      content1.classList.add('block');

      arrow_icon1.classList.remove('fa-chevron-down');
      arrow_icon1.classList.add('fa-chevron-up');
    }, 150);

  }
  else {

    setTimeout(() => {
      content1.classList.remove('block');
      content1.classList.add('hidden');

      arrow_icon1.classList.remove('fa-chevron-up');
      arrow_icon1.classList.add('fa-chevron-down');
    }, 150)

  }
})


title2.addEventListener('click', () => {
  if (content2.classList.contains('hidden')) {

    setTimeout(() => {
      content2.classList.remove('hidden');
      content2.classList.add('block');

      arrow_icon2.classList.remove('fa-chevron-down');
      arrow_icon2.classList.add('fa-chevron-up');
    }, 150);

  }
  else {

    setTimeout(() => {
      content2.classList.remove('block');
      content2.classList.add('hidden');

      arrow_icon2.classList.remove('fa-chevron-up');
      arrow_icon2.classList.add('fa-chevron-down');
    }, 150)

  }
})
