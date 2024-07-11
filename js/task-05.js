const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', evt => {
  if (evt.currentTarget.value === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = evt.currentTarget.value;
  }
});