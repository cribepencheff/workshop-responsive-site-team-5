const searchBtn = document.getElementById('search--btn');
const searchBtnClose = document.getElementById('search--btn__close');

searchBtn.addEventListener('click', () => {
  document.body.classList.add('search--active');
});

searchBtnClose.addEventListener('click', () => {
  document.body.classList.remove('search--active');
});