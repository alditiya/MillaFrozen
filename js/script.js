// Toggle class Active
const navbarNav = document.querySelector('.navbar-nav');


// ketika hamburger dibuka
document.querySelector('#hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};


// function menu
const hamburgermenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e){
  if (!hamburgermenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
