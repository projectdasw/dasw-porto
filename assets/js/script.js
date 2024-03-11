var open_bars = document.getElementById("bars-menu");
var close_bars = document.getElementById("close-menu");
var menu_content = document.getElementById("menu-content");
var icon_content = document.getElementById("icon-content");

open_bars.addEventListener("click", () =>{
    menu_content.style.transform = "translateX(0)";
    icon_content.style.transform = "translateX(0)";
});

close_bars.addEventListener("click", () =>{
    menu_content.removeAttribute("style");
    icon_content.removeAttribute("style");
});

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_mdoy8nb";
    const templateID = "template_zrl7995";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        Swal.fire({
            icon: "success",
            title: "Your message sent successfully",
            showConfirmButton: false,
            timer: 1500
        });
    })
    .catch(err=>console.log(err));
}