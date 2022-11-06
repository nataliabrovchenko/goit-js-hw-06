function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(`.change-color`);
const color = document.querySelector(`.color`);

const changeColor = (event) => {
  document.body.style.background = getRandomHexColor();
  color.textContent = getRandomHexColor();
}

button.addEventListener(`click`, changeColor);
