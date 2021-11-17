window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("nav");
var navmenu = document.getElementById("nav-menu");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("dasw-nav-sticky");
        navbar.classList.add("fadeIn");
    } else {
        navbar.classList.remove("dasw-nav-sticky");
        navbar.classList.remove("fadeIn");
    }
}

function dasw_nav() {
    navmenu.classList.remove("dasw-menunav");
    navmenu.classList.add("dasw-menunav-bars");
}