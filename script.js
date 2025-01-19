document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active'); // Toggle visibility of the menu
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".hero-slider");
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function nextSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0; // Loop back to the first slide
        }
        slider.style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(nextSlide, 4000); // Change image every 4 seconds
});
