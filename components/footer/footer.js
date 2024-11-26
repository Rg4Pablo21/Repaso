document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    document.querySelectorAll('.social-icons img').forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Redirigiendo a la red social...');
        });
    });
});
