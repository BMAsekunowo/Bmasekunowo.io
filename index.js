const currentLocation = window.location.href;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Select the banner element
const banner = document.querySelector('.banner');

// Function to toggle the "inactive" class based on scroll position
const toggleBannerPosition = () => {
  if (window.scrollY > 100) { // Adjust threshold as needed
    banner.classList.add('inactive'); // Add "inactive" class
  } else {
    banner.classList.remove('inactive'); // Remove "inactive" class
  }
};

// Add scroll event listener
window.addEventListener('scroll', toggleBannerPosition);