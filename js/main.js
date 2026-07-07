// COS 106 Portfolio - Main JavaScript
// Oluwadara Bolaji | MIVA Open University

// Mobile hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle mobile menu when hamburger is clicked
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked (for mobile)
document.querySelectorAll('.nav-menu li a').forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
