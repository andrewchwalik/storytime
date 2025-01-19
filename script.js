// Mobile JAVA
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active'); // Toggle visibility of the menu
});

// Home Page Header JAVA
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        slides[index].classList.remove("active"); // Hide current image
        index = (index + 1) % slides.length; // Move to next image
        slides[index].classList.add("active"); // Show new image
    }

    setInterval(nextSlide, 4000); // Change image every 4 seconds
});
