let mobileBtns = document.querySelectorAll ('.header__item--white');
let openCloseBtn = document.querySelector('.header__btn');

openCloseBtn.addEventListener ('click', function () {
  for (let mobileBtn of mobileBtns) {
    mobileBtn.classList.toggle('header__item--mobile');
  }
  openCloseBtn.classList.toggle('header__btn--open');
  openCloseBtn.classList.toggle('header__btn--close');
})
