// Get the logo image element
const workImage = document.querySelector('.logo a img');

// Add hover effect
workImage.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});

// Remove hover effect when mouse leaves
workImage.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Note: The click functionality is handled by the HTML anchor tag (<a href="index.html">)
// No additional JavaScript is needed for the click-to-navigate feature