// Home Page Header - Image Slideshow
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        let currentSlide = slides[index];
        let nextIndex = (index + 1) % slides.length;
        let nextSlide = slides[nextIndex];

        // Move the current slide off-screen to the left
        currentSlide.classList.remove("active");
        currentSlide.classList.add("prev");
        currentSlide.style.transform = "translateX(-100%)"; // Slide out to the left

        // Reset the next slide's position (off-screen right) before making it active
        nextSlide.classList.remove("prev");
        nextSlide.style.transform = "translateX(100%)"; // Reset position to right

        // Delay adding the 'active' class to prevent flickering
        setTimeout(() => {
            nextSlide.classList.add("active");
            nextSlide.style.transform = "translateX(0)"; // Move into the center
        }, 50);

        index = nextIndex; // Update the index for the next transition
    }

    // Change slide every 4 seconds
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
