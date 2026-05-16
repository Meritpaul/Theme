// Theme Toggle

const themeToggle = document.getElementById("themeToggle");

// Check Saved Theme
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
    '<i class="bi bi-sun-fill"></i>';
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Save Theme
    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
        '<i class="bi bi-sun-fill"></i>';

    }else{

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
        '<i class="bi bi-moon-fill"></i>';
    }

});

// AOS Initialize

AOS.init({

    duration: 1000,
    once: true

});