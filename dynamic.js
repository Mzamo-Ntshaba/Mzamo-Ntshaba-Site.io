// Hamburger menu logic
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Open/close hamburger menu
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close menu on link click and navigate to the section
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent page jump
        const targetId = link.getAttribute('href').slice(1); // Get section ID
        showSection(targetId); // Show the correct section
        document.body.classList.remove('nav-open'); // Close menu
    });
});

// Dynamic section navigation logic
const sections = document.querySelectorAll('section');

function showSection(targetId) {
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active'); // Show targeted section
        } else {
            section.classList.remove('active'); // Hide others
        }
    });
}

// Default section view (home)
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
