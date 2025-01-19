// Home Page Header JAVA
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        // Remove the active class from the current slide
        slides[index].classList.remove("active");
        slides[index].classList.add("prev"); // Move current slide off to the left

        // Update the index for the next slide
        index = (index + 1) % slides.length;

        // Make the next slide active and move it into position
        slides[index].classList.remove("prev");
        slides[index].classList.add("active");
    }

    // Change image every 4 seconds
    setInterval(nextSlide, 4000);
});


// Mobile JAVA
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active'); // Toggle visibility of the menu
});
