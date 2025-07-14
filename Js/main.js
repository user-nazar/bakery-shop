document.addEventListener('DOMContentLoaded', function(){
//Adding tooggle logic to display menu Icons:
const hamburgerMenu = document.querySelector('.hamburger-menu');
const toggler = document.querySelectorAll('.toggle')
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', function(){
    toggler.forEach( icon => { icon.classList.toggle('open')});
    navList.classList.toggle('open');
});
//Initialize Animate on Scroll lib:
AOS.init({
    easing: 'ease',
    duration: 1000
}
);
});