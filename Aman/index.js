const mobileMenu = document.getElementById('mobileMenu');

function menuOnclick() {
    mobileMenu.style = "display: block";
}

function closeMenu() {
    mobileMenu.style = "display: none";
}


if (mobileMenu) {
    closeMenu();
}
