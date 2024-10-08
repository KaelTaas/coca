import '/scss/main.scss';

// components
import './components/theme';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useBurger();
useInsightSlider();
useTestimonialsSlider();
