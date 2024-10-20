import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

export const useAboutSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Pagination],
    slidesPerView: '1.5',
    spaceBetween: '32',
    loop: true,
    pagination: {
      el: '.hero__pagination',
      type: 'fraction',
    },
    breakpoints: {
      1201: {
        slidesPerView: '2.5',
      },
      breakpoints: {
        993: {
          slidesPerView: '2',
        },
      },
      autoHeight: true,
    },
  });
};
