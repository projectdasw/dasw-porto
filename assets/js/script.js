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

// PROJECT LIST MODAL BUTTON EVENT HANDLER
// ----------------------------------------------------------------------------------

// MODAL OPEN BUTTON
const esac_button = document.getElementById("esac-button");
const blimbing_button = document.getElementById("blimbing-button");
const kebun_button = document.getElementById("kebun-button");
const keuskupan_button = document.getElementById("keuskupan-button");
const kompatise_button = document.getElementById("kompatise-button");
const kiu_button = document.getElementById("kiu-button");
const titi_button = document.getElementById("titi-button");
const seminari_button = document.getElementById("seminari-button");
// END OF MODAL OPEN BUTTON

// MODAL CONTENT
const esac_modal = document.getElementById("esac");
const gereja_blimbing_modal = document.getElementById("gereja-blimbing");
const kebun_sayur_blimbing_modal = document.getElementById("kebun-sayur-blimbing");
const keuskupan_malang_modal = document.getElementById("keuskupan-malang");
const kompatise_modal = document.getElementById("kompatise");
const kiu_modal = document.getElementById("kiu");
const mc_titi_modal = document.getElementById("mc-titi");
const seminari_probolinggo_modal = document.getElementById("seminari-probolinggo");
// END OF MODAL CONTENT

// MODAL CLOSE BUTTON
const close_modal_esac = document.getElementById("close-modal-esac");
const close_modal_blimbing = document.getElementById("close-modal-blimbing");
const close_modal_kebun = document.getElementById("close-modal-kebun");
const close_modal_keuskupan = document.getElementById("close-modal-keuskupan");
const close_modal_kompatise = document.getElementById("close-modal-kompatise");
const close_modal_kiu = document.getElementById("close-modal-kiu");
const close_modal_titi = document.getElementById("close-modal-titi");
const close_modal_seminari = document.getElementById("close-modal-seminari");
// END OF MODAL CLOSE BUTTON

// FUNCTION MODAL OPEN BUTTON
esac_button.addEventListener('click', function () {
    esac_modal.style.transform = "translateY(0)";
    esac_modal.style.transition = ".5s all ease-in-out";
})

blimbing_button.addEventListener('click', function () {
    gereja_blimbing_modal.style.transform = "translateY(0)";
    gereja_blimbing_modal.style.transition = ".5s all ease-in-out";
})

kebun_button.addEventListener('click', function () {
    kebun_sayur_blimbing_modal.style.transform = "translateY(0)";
    kebun_sayur_blimbing_modal.style.transition = ".5s all ease-in-out";
})

keuskupan_button.addEventListener('click', function () {
    keuskupan_malang_modal.style.transform = "translateY(0)";
    keuskupan_malang_modal.style.transition = ".5s all ease-in-out";
})

kompatise_button.addEventListener('click', function () {
    kompatise_modal.style.transform = "translateY(0)";
    kompatise_modal.style.transition = ".5s all ease-in-out";
})

kiu_button.addEventListener('click', function () {
    kiu_modal.style.transform = "translateY(0)";
    kiu_modal.style.transition = ".5s all ease-in-out";
})

titi_button.addEventListener('click', function () {
    mc_titi_modal.style.transform = "translateY(0)";
    mc_titi_modal.style.transition = ".5s all ease-in-out";
})

seminari_button.addEventListener('click', function () {
    seminari_probolinggo_modal.style.transform = "translateY(0)";
    seminari_probolinggo_modal.style.transition = ".5s all ease-in-out";
})
// END OF FUNCTION MODAL OPEN BUTTON

// FUNCTION MODAL CLOSE BUTTON
close_modal_esac.addEventListener("click", function () {
    esac_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        esac_modal.removeAttribute("style")
    }, 1000);
})

close_modal_blimbing.addEventListener("click", function () {
    gereja_blimbing_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        gereja_blimbing_modal.removeAttribute("style")
    }, 1000);
})

close_modal_kebun.addEventListener("click", function () {
    kebun_sayur_blimbing_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        kebun_sayur_blimbing_modal.removeAttribute("style")
    }, 1000);
})

close_modal_keuskupan.addEventListener("click", function () {
    keuskupan_malang_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        keuskupan_malang_modal.removeAttribute("style")
    }, 1000);
})

close_modal_kompatise.addEventListener("click", function () {
    kompatise_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        kompatise_modal.removeAttribute("style")
    }, 1000);
})

close_modal_kiu.addEventListener("click", function () {
    kiu_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        kiu_modal.removeAttribute("style")
    }, 1000);
})

close_modal_titi.addEventListener("click", function () {
    mc_titi_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        mc_titi_modal.removeAttribute("style")
    }, 1000);
})

close_modal_seminari.addEventListener("click", function () {
    seminari_probolinggo_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        seminari_probolinggo_modal.removeAttribute("style")
    }, 1000);
})
// END OF FUNCTION MODAL OPEN BUTTON

// END OF PROJECT LIST MODAL BUTTON EVENT HANDLER
// ----------------------------------------------------------------------------------