var daswsidebar_collapse = document.getElementById("daswsidebar-collapse");
var daswtext_collapse = document.querySelectorAll(".dasw-prj-text");
var daswspan_collapse = document.querySelector(".dasw-collapse > span");
var dasw_i_collapse = document.querySelector(".dasw-collapse > i");
var daswimg_collapse = document.querySelectorAll(".dasw-prj-content > img");
var daswmainprj_collapse = document.querySelector(".dasw-main-prj");
var dasw_code_prj = document.querySelectorAll(".dasw-text-prj-info");
var dasw_btnoverlay = document.querySelectorAll(".dasw-text-overlay > button");
var daswclose_btnoverlay = document.querySelectorAll(".dasw-heading-close > button");
var dasw_prj_nav = document.querySelector(".dasw-prj-menunav");
var dasw_prj_bars = document.getElementById("dasw-prj-bars");
var mybutton = document.getElementById("btt-prj-btn");
var dasw;

document.onscroll = function () {
    scrollFunction()
};

function dasw_prjnav() {
    if (dasw_prj_nav.style.display === "flex") {
        dasw_prj_nav.style.animationName = "daswNavOut";
        dasw_prj_nav.style.animationDuration = "1s";
        window.setTimeout(() => {
            dasw_prj_nav.style.display = "none";
        }, 500);
        dasw_prj_bars.innerHTML = "<i class='fas fa-bars'></i>";
        dasw_prj_bars.style.animation = "dasw-opennav 1s ease 0s 1 normal forwards";
    } else {
        dasw_prj_nav.style.display = "flex";
        dasw_prj_nav.style.animationName = "daswNavIn";
        dasw_prj_nav.style.animationDuration = "1s";
        dasw_prj_bars.innerHTML = "<i class='fas fa-times'></i>";
        dasw_prj_bars.style.animation = "dasw-closenav 1s ease 0s 1 normal forwards";
    }
}

// DASW POP UP BUTTON
dasw_btnoverlay[0].addEventListener("click", () => {
    dasw_code_prj[0].style.display = "flex";
    dasw_code_prj[0].style.animationName = "fadeIn";
    dasw_code_prj[0].style.animationDuration = "1s";
    dasw_code_prj[0].style.justifyContent = "center";
    dasw_code_prj[0].style.alignItems = "center";
});
dasw_btnoverlay[1].addEventListener("click", () => {
    dasw_code_prj[1].style.display = "flex";
    dasw_code_prj[1].style.animationName = "fadeIn";
    dasw_code_prj[1].style.animationDuration = "1s";
    dasw_code_prj[1].style.justifyContent = "center";
    dasw_code_prj[1].style.alignItems = "center";
});
dasw_btnoverlay[2].addEventListener("click", () => {
    dasw_code_prj[2].style.display = "flex";
    dasw_code_prj[2].style.animationName = "fadeIn";
    dasw_code_prj[2].style.animationDuration = "1s";
    dasw_code_prj[2].style.justifyContent = "center";
    dasw_code_prj[2].style.alignItems = "center";
});
dasw_btnoverlay[3].addEventListener("click", () => {
    dasw_code_prj[3].style.display = "flex";
    dasw_code_prj[3].style.animationName = "fadeIn";
    dasw_code_prj[3].style.animationDuration = "1s";
    dasw_code_prj[3].style.justifyContent = "center";
    dasw_code_prj[3].style.alignItems = "center";
});

daswclose_btnoverlay[0].addEventListener("click", () => {
    window.setTimeout(() => {
        dasw_code_prj[0].style.display = "none";
    }, 500);
    dasw_code_prj[0].style.animationName = "fadeOut";
    dasw_code_prj[0].style.animationDuration = "1s";
});
daswclose_btnoverlay[1].addEventListener("click", () => {
    window.setTimeout(() => {
        dasw_code_prj[1].style.display = "none";
    }, 500);
    dasw_code_prj[1].style.animationName = "fadeOut";
    dasw_code_prj[1].style.animationDuration = "1s";
});
daswclose_btnoverlay[2].addEventListener("click", () => {
    window.setTimeout(() => {
        dasw_code_prj[2].style.display = "none";
    }, 500);
    dasw_code_prj[2].style.animationName = "fadeOut";
    dasw_code_prj[2].style.animationDuration = "1s";
});
daswclose_btnoverlay[3].addEventListener("click", () => {
    window.setTimeout(() => {
        dasw_code_prj[3].style.display = "none";
    }, 500);
    dasw_code_prj[3].style.animationName = "fadeOut";
    dasw_code_prj[3].style.animationDuration = "1s";
}); 
// END OF DASW POP UP BUTTON

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

// const daswcode_prjimg = document.querySelectorAll(".dasw-code-prj-img");
// const daswcode_prjcontent = document.querySelector(".dasw-code-prj-content");
// document.addEventListener("scroll", function () {
//     const clientHeight = document.documentElement.clientHeight;
//     // const daswcode_prjcontentY = daswcode_prjcontent.getBoundingClientRect().y;
//     // const daswcode_prjcontentHeight = daswcode_prjcontent.getBoundingClientRect().height;
//     const daswcode_prjimgHeight_0 = daswcode_prjimg[0].getBoundingClientRect().height;
//     const daswcode_prjimgHeight_1 = daswcode_prjimg[1].getBoundingClientRect().height;
//     const daswcode_prjimgHeight_2 = daswcode_prjimg[2].getBoundingClientRect().height;
//     const daswcode_prjimgHeight_3 = daswcode_prjimg[3].getBoundingClientRect().height;
//     const daswcode_prjimgY_0 = daswcode_prjimg[0].getBoundingClientRect().y;
//     const daswcode_prjimgY_1 = daswcode_prjimg[1].getBoundingClientRect().y;
//     const daswcode_prjimgY_2 = daswcode_prjimg[2].getBoundingClientRect().y;
//     const daswcode_prjimgY_3 = daswcode_prjimg[3].getBoundingClientRect().y;

//     if (clientHeight > daswcode_prjimgY_0 + (daswcode_prjimgHeight_0 * 2) / 3) {
//         console.log("WOW 0");
//     } else if (clientHeight > daswcode_prjimgY_1) {
//         console.log("WOW 1");
//     } else if (clientHeight > daswcode_prjimgY_2) {
//         console.log("WOW 2");
//     } else if (clientHeight > daswcode_prjimgY_3) {
//         console.log("WOW 3");
//     }
// });