import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';

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

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 1.15,
    spaceBetween: '15',
    loop: true,
    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },
    breakpoints: {
      769: {
        slidesPerView: '2.5',
        spaceBetween: '32',
      },
      577: {
        slidesPerView: '1.5',
      },
    },
  });
};
