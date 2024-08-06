// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//Ketika Humburger Menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


//Klik diluar side bar untuk menghilangkan nav nya
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});