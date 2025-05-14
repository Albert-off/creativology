/* ================ HAMBURGER MENU ================ */ 
const headerNav = document.querySelector(".nav");
const mobileMenu = document.querySelector(".mobile__menu")
const menuIcon = document.querySelector(".menu-icon")

function hideMenu() {
    mobileMenu.classList.remove("active")
}

function toggleMenu() {
    // Add show-icon to show and hide the menu icon
    menuIcon.classList.toggle('show-icon')

    if (!mobileMenu.classList.contains("active")) {
        mobileMenu.classList.add("active")   
    } else {
        hideMenu();
    }
}

// hide menu when clicking on another area of ​​the screen
document.addEventListener("click", function(event) {
    if (!headerNav.contains(event.target)) {
        hideMenu();
    }
});
