// PRELOADER
// ----------------------------------------------------------------------------------

// PRELOADER CONTAINER
// var preload_container = document.getElementById("preloader");
// let preload;

// function preload_animation() {
//     preload_container.style.transition = "3.5s"
//     preload_container.style.transform = "translateX(-5000px)";
// }

// function close_preload() {
//     preload_container.style.display = "none";
// }

// preload = setTimeout(preload_animation, 12000);
// preload = setTimeout(close_preload, 13000);
// END OF PRELOADER

// PRELOADER TEXT 1
// var preload_logo = document.getElementById("preload-logo");
// var preload_span_1 = document.getElementById("preload-span-1");
// let preload_text_1;

// function preload_text1_animation() {
//     preload_logo.style.transition = "0.35s ease-out";
//     preload_logo.style.transform = "translateX(-50px)";
//     preload_logo.style.opacity = "0";
//     preload_span_1.style.transition = "1s ease-out"
//     preload_span_1.style.transform = "translateX(-50px)";
//     preload_span_1.style.opacity = "0";
// }

// function close_preload_text1() {
//     preload_span_1.style.display = "none";
//     preload_logo.style.display = "none";
// }

// preload_text_1 = setTimeout(preload_text1_animation, 5000);
// preload_text_1 = setTimeout(close_preload_text1, 6000);
// END OF PRELOADER TEXT 1

// PRELOADER TEXT 2
// var preload_span_2 = document.getElementById("preload-span-2");
// let preload_text_2;
// preload_span_2.style.display = "none";
// preload_span_2.style.opacity = "0";

// function open_preload_text2() {
//     preload_span_2.style.display = "flex";
// }

// function preload_text2_animation() {
//     preload_span_2.style.opacity = "1";
//     preload_span_2.style.transition = "0.35s ease";
// }

// function close_preload_text2_animation() {
//     preload_span_2.style.opacity = "0";
//     preload_span_2.style.transition = "0.35s ease";
// }

// function close_preload_text2() {
//     preload_span_2.style.display = "none";
// }

// preload_text_2 = setTimeout(open_preload_text2, 6150);
// preload_text_2 = setTimeout(preload_text2_animation, 6250);
// preload_text_2 = setTimeout(close_preload_text2_animation, 9000);
// preload_text_2 = setTimeout(close_preload_text2, 9500);
// END OF PRELOADER TEXT 2

// PRELOADER TEXT 3
// var preload_span_3 = document.getElementById("preload-span-3");
// let preload_text_3;
// preload_span_3.style.display = "none";
// preload_span_3.style.opacity = "0";

// function open_preload_text3() {
//     preload_span_3.style.display = "flex";
// }

// function preload_text3_animation() {
//     preload_span_3.style.display = "flex";
//     preload_span_3.style.opacity = "1";
//     preload_span_3.style.transition = "0.35s ease";
// }

// function close_preload_text3() {
//     preload_span_3.style.display = "none";
// }

// preload_text_3 = setTimeout(open_preload_text3, 9800);
// preload_text_3 = setTimeout(preload_text3_animation, 10000);
// preload_text_3 = setTimeout(close_preload_text3, 13000);
// END OF PRELOADER TEXT 3

// END OF PRELOADER
// ----------------------------------------------------------------------------------

// INTERSECTION OBSERVER (LAZY LOAD)
// ----------------------------------------------------------------------------------

// const dasw_header = document.getElementById("dasw-header");
// const options = {};

// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             return;
//         }
//         observer.unobserve(entry.target);
//         console.log(entry.target);
//     });
// }, options);

// observer.observe(dasw_header);

// END OF INTERSECTION OBSERVER (LAZY LOAD)
// ----------------------------------------------------------------------------------