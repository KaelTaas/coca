/* eslint-disable prettier/prettier */
const body = document.querySelector('.body');
const themeSwitcher = document.querySelector('.header__switcher');
const themeSwitcherCheck = document.querySelector('.header__switcher-checkbox');

const themeTargetDataset = body.dataset;

const theme = localStorage.getItem('theme') || 'light';
themeTargetDataset.theme = theme;

if (theme === 'dark') {
    themeSwitcherCheck.checked = true;
}

themeSwitcher.addEventListener('click', (event) => {
  if (event.target && event.target.tagName === 'LABEL') {
    if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    //   localStorage.setItem сохраняет выбранные параметры после перезагрузки страницы в данном случае тему, для этого нужны были строки 
    // const themeTargetDataset = body.dataset;

// const theme = localStorage.getItem('theme') || 'light';
// themeTargetDataset.theme = theme;

// if (theme === 'dark') {
//     themeSwitcherCheck.checked = true;
// }
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
});
