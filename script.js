document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('nav.d-md-none .nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.forEach((nav) => {
                nav.classList.toggle('active');
            });
        });
    } else {
        console.error("Hamburger menu element not found");
    }
});
