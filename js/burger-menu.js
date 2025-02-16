document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.header-burger');
    const burgerMenu = document.querySelector('.burger-menu');
    const body = document.body;
    const html = document.documentElement;

    // Toggle menu open/close
    burgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('open');
        burgerButton.classList.toggle('open');
        body.classList.toggle('no-scroll'); // Prevent scroll when menu is open
        html.classList.toggle('no-scroll'); // Apply to both body and html
    });

    // Close the burger menu when any link is clicked
    const navLinks = document.querySelectorAll('.modal-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            burgerMenu.classList.remove('open');
            burgerButton.classList.remove('open');
            body.classList.remove('no-scroll'); // Allow scrolling again
            html.classList.remove('no-scroll'); // Allow scrolling again
        });
    });
});