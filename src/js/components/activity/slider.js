import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

export const useHeroActivitySlider = () => {
  new Swiper('.hero-activity__slider', {
    modules: [Pagination],
    slidesPerView: '1',
    spaceBetween: '32',
    loop: true,
    pagination: {
      el: '.hero-activity__pagination',
      type: 'fraction',
    },
    breakpoints: {
      993: {
        slidesPerView: '2.5',
      },
      769: {
        slidesPerView: '2',
      },
      577: {
        slidesPerView: '1.25',
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: '22',
    loop: true,
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
