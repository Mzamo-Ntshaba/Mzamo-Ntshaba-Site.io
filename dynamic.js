// Select navigation links and sections
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

// Function to show the clicked section and hide others
function showSection(targetId) {
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active'); // Show targeted section
        } else {
            section.classList.remove('active'); // Hide other sections
        }
    });
}

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').slice(1); // Extract section ID
        showSection(targetId); // Call the function to update the section
    });
});

// Set default view to the "home" section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Display "home" on page load
});
