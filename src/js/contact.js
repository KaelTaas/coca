import '../assets/scss/contact.scss';

// components
import './components/theme';
import { useBurger } from './components/burger.js';
import { usePhone } from './components/contact/phone.js';
import { useBtn } from './components/contact/btn-alert.js';

useBurger();
usePhone();
useBtn();
