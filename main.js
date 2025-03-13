document.addEventListener("DOMContentLoaded", function () {
  var brand_swiper = new Swiper(".brand_swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    touchEventsTarget: "wrapper",
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 3, spaceBetween: 15 },
      1024: { slidesPerView: 4, spaceBetween: 20 },
    },
  });
  var menuToggle = document.querySelector(".menu-toggle");
  var navigationUl = document.querySelector(".navigation ul");

  if (menuToggle && navigationUl) {
    menuToggle.addEventListener("click", function () {
      navigationUl.classList.toggle("active");
    });
  } else {
    console.error("Menu toggle or navigation ul not found");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var anime_swiper = new Swiper(".anime_swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
      1280: { slidesPerView: 4, spaceBetween: 20},
    },
  });
});
