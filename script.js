// Home Page Header - Image Slideshow
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        // Remove the active class from the current slide and move it left
        slides[index].classList.remove("active");
        slides[index].classList.add("prev"); // Move current slide off to the left

        // Update the index for the next slide
        index = (index + 1) % slides.length;

        // Reset all slides (to ensure they are positioned off-screen before entering)
        slides.forEach((slide, i) => {
            if (i !== index) {
                slide.classList.remove("active", "prev");
                slide.style.transform = "translateX(100%)"; // Reset position (off-screen right)
            }
        });

        // Make the next slide active and move it into position
        slides[index].classList.add("active");
        slides[index].style.transform = "translateX(0)"; // Move into view
    }

    // Change image every 4 seconds
    setInterval(nextSlide, 4000);
});

// Mobile Navigation Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active'); // Toggle visibility of the menu
        });
    }
});
