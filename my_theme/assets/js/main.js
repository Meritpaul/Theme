/* =====================================================
    MAIN.JS
   ===================================================== */

/* =====================================================
    AOS — Initialize
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true,
        });
    }

});

/* =====================================================
    PRELOADER
   ===================================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.classList.add("hide");
    }

});

/* =====================================================
    THEME TOGGLE
   ===================================================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Apply saved theme on page load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }

    // Toggle on click
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        }

    });

}

/* =====================================================
    STICKY NAVBAR
   ===================================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 80);
    }

});

/* =====================================================
    HERO SWIPER SLIDER
   ===================================================== */

if (document.querySelector(".heroSwiper")) {

    new Swiper(".heroSwiper", {

        loop: true,
        speed: 1000,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

}