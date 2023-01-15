function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const nameSpanColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', bodyChangeColor)

function bodyChangeColor(event) {
  const randomColor = getRandomHexColor();

  bodyColor.style.backgroundColor = randomColor;
  nameSpanColor.textContent = randomColor;
}
