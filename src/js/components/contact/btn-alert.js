export const useBtn = () => {
  const form = document.querySelector('.get-started__form');
  const input = document.querySelector('.get-started__form-input');
  form.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON' && input.value) {
      event.preventDefault();
      alert('Your request has been sent');
    }
  });
};
