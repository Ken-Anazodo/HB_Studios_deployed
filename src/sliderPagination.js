let swiper = null;
let swiper2 = null;

// let engine = document.getElementById("engine");



export const loadSwipers = () => {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      499: {
        slidesPerView: 2,
        spaceBetweenSlides: 30,
      },
      999: {
        slidesPerView: 3,
        spaceBetweenSlides: 30,
      },
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

// Call loadSwipers function when the document is ready
// document.addEventListener("DOMContentLoaded", () => {
// });

// if( engine.id == 'engine'){
    
    // loadSwipers();
// }