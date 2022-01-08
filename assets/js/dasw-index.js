window.onscroll = function () {
    myFunction()
};

document.onscroll = function () {
    scrollFunction()
};

var home_menu = document.getElementById("home");
var project_menu = document.getElementById("project");
var about_menu = document.getElementById("about");
var contact_menu = document.getElementById("contact");

home_menu.addEventListener("click", () => {
    window.setInterval(() => {
        document.querySelector(".loading").style.display = "flex";
        document.querySelector(".loading").style.transform = "translateX(-100%)";
        document.querySelector(".loading").style.transition = "1s";
        window.setTimeout(() => {
            document.querySelector(".loading").style.display = "none";
        }, 4000);
    }, 5000);
})
var mybutton = document.getElementById("btt-btn");
var navbar = document.getElementById("nav");
var navmenu = document.getElementById("nav-menu");
var opennav = document.getElementById("dasw-open-bars");
var closenav = document.getElementById("dasw-close-bars");
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

function dasw_opennav() {
    navmenu.classList.remove("dasw-menunav");
    navmenu.classList.add("dasw-menunav-bars");
    closenav.style.display = "flex";
    closenav.style.fontSize = "30px";
    closenav.style.padding = "10px";
    closenav.style.justifyContent = "flex-end";
    closenav.style.animation = "dasw-closenav 1s ease 0s 1 normal forwards";
    opennav.style.display = "none";
}

function dasw_closenav() {
    navmenu.classList.add("dasw-menunav");
    navmenu.classList.remove("dasw-menunav-bars");
    closenav.style.display = "none";
    opennav.style.display = "flex";
    opennav.style.animation = "dasw-opennav 1s ease 0s 1 normal forwards";
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "flex";
        mybutton.classList.add("fadeInUp");
        mybutton.classList.remove("fadeOutDown");
    } else {
        mybutton.classList.remove("fadeInUp");
        mybutton.classList.add("fadeOutDown");
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}