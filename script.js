document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

let currentIndex = 0;
const bannerWrapper = document.querySelector(".banner-wrapper");
const slides = document.querySelectorAll(".banner-slide");

function showSlide(index) {
    bannerWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(() => {
    nextSlide();
}, 10000);

showSlide(currentIndex);