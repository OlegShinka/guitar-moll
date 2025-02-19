const swiper = new Swiper(".reviews-swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    grabCursor: true,
    slideToClickedSlide: true,
  },
});
