function toggleNavbar() {
    const navbarButton = document.querySelector('.navbar-button');
    navbarButton.classList.toggle('open');
    
    const burgerMenu = document.querySelector('.nav-links');
    burgerMenu.classList.toggle('open');
}
