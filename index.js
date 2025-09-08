const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger-line');
const menu = document.querySelector('.header__menu');
const list = document.querySelector('.header__list');
const profileButton = document.querySelector('.header__button-profile');
const header = document.querySelector('.header');
const heroInner = document.querySelector('.hero__inner');
const body = document.querySelector('body');
const hero = document.querySelector('.hero');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    body.classList.toggle('active');
    burgerLine.classList.toggle('active');
    header.classList.toggle('active');
    menu.classList.toggle('active');
    list.classList.toggle('active');
    profileButton.classList.toggle('active');
    heroInner.classList.toggle('active');
    hero.classList.toggle('active');
});

list.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (li) {
        body.classList.remove('active');
        burgerLine.classList.remove('active');
        header.classList.remove('active');
        menu.classList.remove('active');
        list.classList.remove('active');
        profileButton.classList.remove('active');
        heroInner.classList.remove('active');
        hero.classList.remove('active');
    }
});