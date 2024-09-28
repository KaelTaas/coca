import Swiper from 'swiper';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: '32',
    // loop: true,
    centeredSlides: true,
    pagination: {
      el: '.insight__pagination',
      type: 'fraction',
    },
    breakpoints: {
      1201: {
        centeredSlides: false,
      },
    },
  });
};
