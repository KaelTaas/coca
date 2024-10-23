import '/scss/activity.scss';

// components
import './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeroActivitySlider } from './components/activity/slider.js';
import { useArticlesSlider } from './components/activity/slider.js';

useBurger();
useHeroActivitySlider();
useArticlesSlider();
