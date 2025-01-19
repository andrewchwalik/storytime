// Home Page Header - Image Slideshow
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        // Move the current slide off to the left
        slides[index].classList.remove("active");
        slides[index].classList.add("prev"); 
        slides[index].style.transform = "translateX(-100%)"; // Moves left

        // Update index for the next slide
        index = (index + 1) % slides.length;

        // Reset next slide position (place it off-screen to the right before it enters)
        slides[index].classList.remove("prev");
        slides[index].style.transform = "translateX(100%)"; // Reset position (off-screen right)

        // Delay adding active class slightly to prevent flickering
        setTimeout(() => {
            slides[index].classList.add("active");
            slides[index].style.transform = "translateX(0)"; // Move into view
        }, 50);
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
