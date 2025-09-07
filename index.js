const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger-line');
const menu = document.querySelector('.header__menu');
const list = document.querySelector('.header__list');
const profileButton = document.querySelector('.header__button-profile');
const header = document.querySelector('.header');
const heroInner = document.querySelector('.hero__inner');
const body = document.querySelector('body');


burger.addEventListener('click', () => {
    body.classList.toggle('active');
    burgerLine.classList.toggle('active');
    header.classList.toggle('active');
    menu.classList.toggle('active');
    list.classList.toggle('active');
    profileButton.classList.toggle('active');
    heroInner.classList.toggle('active');
});
