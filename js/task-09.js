function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom() {
  const color = getRandomHexColor()
  bodyEl.setAttribute('style', `background-color: ${color}`);
  colorEl.textContent = color;
}
