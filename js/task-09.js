const button = document.querySelector(".change-color");
const output = document.querySelector(".color");

button.addEventListener("click", handleClick);

function handleClick() {
 let color = document.body.style.backgroundColor = getRandomHexColor();
  output.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
