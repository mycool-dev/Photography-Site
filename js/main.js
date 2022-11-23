const menuBtn = document.querySelector('.menu-btn');
const menuBtnBurger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuNavItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtnBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuNavItems.forEach(item => item.classList.add('open'))
        showMenu = true;
    }
    else{
        menuBtnBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuNavItems.forEach(item => item.classList.remove('open'))
        showMenu = false;
    }
}