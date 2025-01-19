// Home Page Header - Image Slideshow
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        let currentSlide = slides[index];
        let nextIndex = (index + 1) % slides.length;
        let nextSlide = slides[nextIndex];

        // Move the current slide out to the left
        currentSlide.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
        currentSlide.style.transform = "translateX(-100%)";
        currentSlide.style.opacity = "0";

        // Reset the next slide's position (off-screen right)
        nextSlide.style.transition = "none"; // Temporarily remove transition
        nextSlide.style.transform = "translateX(100%)"; // Move off-screen right

        // Wait for a tiny delay before adding the transition back (prevents flickering)
        setTimeout(() => {
            nextSlide.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
            nextSlide.style.transform = "translateX(0)"; // Move into view
            nextSlide.style.opacity = "1";
        }, 50);

        index = nextIndex; // Update the index for the next transition
    }

    // Start the slide transition every 4 seconds
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
