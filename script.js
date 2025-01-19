// Home Page Header - Image Slideshow
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        // Move the current slide off-screen to the left
        slides[index].classList.remove("active");
        slides[index].classList.add("prev");
        slides[index].style.transform = "translateX(-100%)"; // Move off to the left

        // Update the index for the next slide
        let nextIndex = (index + 1) % slides.length;

        // Reset next slide to start position (off-screen right) before moving in
        slides[nextIndex].classList.remove("prev");
        slides[nextIndex].style.transform = "translateX(100%)"; // Reset position to right

        // Add active class with a slight delay to prevent flickering
        setTimeout(() => {
            slides[nextIndex].classList.add("active");
            slides[nextIndex].style.transform = "translateX(0)"; // Move to center
        }, 50);

        index = nextIndex; // Update index for next iteration
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
