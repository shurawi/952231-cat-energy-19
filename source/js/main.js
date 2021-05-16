let mobileBtns = document.querySelectorAll ('.header__list--menu .header__item');
let openCloseBtn = document.querySelector('.header__btn');
let afterBtn = document.querySelector('.example__label--after');
let beforeBtn = document.querySelector('.example__label--before');
let afterImg = document.querySelector('.example__img--after');
let beforeImg = document.querySelector('.example__img--before');

//adds open/close for header nav
openCloseBtn.addEventListener ('click', function () {
  for (let mobileBtn of mobileBtns) {
    mobileBtn.classList.toggle('header__item--mobile');
  }
  openCloseBtn.classList.toggle('header__btn--open');
  openCloseBtn.classList.toggle('header__btn--close');
})

//adds before/after condition in example.scss
afterBtn.addEventListener ('click', function () {
  afterImg.classList.remove('example__img--hidden');
  beforeImg.classList.add('example__img--hidden');
})

beforeBtn.addEventListener ('click', function () {
  beforeImg.classList.remove('example__img--hidden');
  afterImg.classList.add('example__img--hidden');
})
