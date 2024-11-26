document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".toggle-menu");
    const navLinks = document.querySelector("nav ul");

    toggleMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
