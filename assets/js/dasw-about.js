const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".about-section4-slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlide = slides.length;
var slideNumber = 0;

//ABOUT LOADING
window.setInterval(() => {
    document.getElementById("about-load").style.transform = "translateX(-100%)";
    document.getElementById("about-load").style.transition = "1s";
    window.setTimeout(() => {
        document.getElementById("about-load").style.display = "none";
    }, 4000);
}, 5000);
//END OF ABOUT LOADING

//BACK TO TOP BUTTON
document.onscroll = function () {
    scrollFunction()
};

var mybutton = document.getElementById("btt-about-btn");
var mybutton_home = document.getElementById("btt-back-home");

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "flex";
        mybutton.classList.add("fadeInUp");
        mybutton.classList.remove("fadeOutDown");
        mybutton_home.style.display = "flex";
        mybutton_home.classList.add("fadeInUp");
        mybutton_home.classList.remove("fadeOutDown");
    } else {
        mybutton.classList.remove("fadeInUp");
        mybutton.classList.add("fadeOutDown");
        mybutton_home.classList.remove("fadeInUp");
        mybutton_home.classList.add("fadeOutDown");
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
//END OF BACK TO TOP BUTTON

//Slider Button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlide - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlide - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});
//END OF SLIDER BUTTON

//AUTOPLAY SLIDER
var playSlider;
var repeater = () => {
    playSlider = setInterval(() => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfSlide - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}
repeater();
//END OF AUTOPLAY SLIDER

//ANIMATION ON SCROLL
const sections = document.querySelectorAll("section");
const section2_img1 = document.querySelector(".about-section2-img > img:nth-child(1)");
const section2_img2 = document.querySelector(".about-section2-img > img:nth-child(2)");
const section2_text = document.querySelector(".about-section2-text");
const section3_img = document.querySelectorAll(".about-section3-img > img");
const section3_text = document.querySelector(".about-section3-hybrid > h1");
const section4_slider = document.querySelector(".about-section4-slider");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("Animate", entry.isIntersecting);
    })
}, {
    root: null,
    threshold: 1,
    rootMargin: "200px"
})

observer.observe(section2_img1);
observer.observe(section2_img2);
observer.observe(section2_text);
section3_img.forEach(section_img => {
    observer.observe(section_img);
})
observer.observe(section3_text);
observer.observe(section4_slider);
//END OF ANIMATION ON SCROLL