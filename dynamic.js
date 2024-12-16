// Select navigation links and sections
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

// Function to show the clicked section and hide others
function showSection(event) {
    const targetId = event.target.getAttribute('href').slice(1); // Extract the ID (e.g., "home")
    sections.forEach(section => {
        if (section.id === targetId) {
            section.style.display = 'block'; // Show the targeted section
        } else {
            section.style.display = 'none'; // Hide other sections
        }
    });

    // Close the hamburger menu after navigation
    document.body.classList.remove('nav-open');
}

// Add event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default behavior of anchor links
        showSection(event);
    });
});

// Default behavior: Show "home" section and hide others on load
document.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none'; // Hide all sections except "home"
        }
    });
});
