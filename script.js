// Home Page Header - Image Slideshow
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    if (slides.length > 0) {
        slides[0].classList.add("active"); // Ensure first slide is visible
    }

    function nextSlide() {
        if (slides.length < 2) return; // Prevent errors if there's only one image

        // Remove active class from current slide
        slides[index].classList.remove("active");
        slides[index].classList.add("prev"); // Move current slide off to the left

        // Update index for the next slide
        index = (index + 1) % slides.length;

        // Remove "prev" class from the next slide before making it active
        slides[index].classList.remove("prev");
        slides[index].classList.add("active");
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
