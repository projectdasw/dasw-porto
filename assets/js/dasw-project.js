var daswprj_collapse = document.getElementById("daswprj-collapse");
var daswtext_collapse = document.querySelectorAll(".dasw-prj-text");
var daswspan_collapse = document.querySelector(".dasw-collapse > span")
var dasw_i_collapse = document.querySelector(".dasw-collapse > i")
var dasw;

function dasw_prj_collapse() {
    for (dasw = 0; dasw < daswtext_collapse.length; dasw++) {
        if (daswtext_collapse[dasw].style.display === "none") {
            daswtext_collapse[dasw].style.display = "flex";
            daswspan_collapse.style.display = "flex";
            daswprj_collapse.style.width = "30%";
            dasw_i_collapse.style.transform = "rotate(0deg)";
        } else {
            daswtext_collapse[dasw].style.display = "none";
            daswprj_collapse.style.width = "10%";
            daswspan_collapse.style.display = "none";
            dasw_i_collapse.style.transform = "rotate(-180deg)";
        }
    }
}