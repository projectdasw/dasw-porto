// SERVICES MODAL BUTTON EVENT HANDLER
// ----------------------------------------------------------------------------------

// MODAL OPEN BUTTON
const web_price_button = document.getElementById("open-modal-web");
// END OF MODAL OPEN BUTTON

// MODAL CONTENT
const web_price_modal = document.getElementById("web-price");
// END OF MODAL CONTENT

// MODAL CLOSE BUTTON
const web_price_close = document.getElementById("close-modal-web");
// END OF MODAL CLOSE BUTTON

// FUNCTION MODAL OPEN BUTTON
web_price_button.addEventListener('click', function () {
    web_price_modal.style.transform = "translateY(0)";
    web_price_modal.style.transition = ".5s all ease-in-out";
})
// END OF FUNCTION MODAL OPEN BUTTON

// FUNCTION MODAL CLOSE BUTTON
web_price_close.addEventListener("click", function () {
    web_price_modal.style.transform = "translateY(-1000px)";
    setTimeout(() => {
        web_price_modal.removeAttribute("style")
    }, 1000);
})
// END OF FUNCTION MODAL CLOSE BUTTON

// FUNCTION MODAL OPEN BUTTON
// $(document).ready(function () {
//     $("#open-modal-web").click(function () {
//         $("#web-price").animate({
//             top: "0"
//         }, 100);
//     })
// })
// END OF FUNCTION MODAL OPEN BUTTON

// FUNCTION MODAL CLOSE BUTTON
// $(document).ready(function () {
//     $("#close-modal-web").click(function () {
//         $("#web-price").animate({
//             top: "-1000px"
//         }, 100);
//     })
// })
// END OF FUNCTION MODAL CLOSE BUTTON

// SERVICES MODAL BUTTON EVENT HANDLER
// ----------------------------------------------------------------------------------