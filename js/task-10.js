const input = document.querySelector("#controls > input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBoxes = (amount) => {
  const elementsAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsAdd.push(div);
  }
  return elementsAdd;
};
createBtn.addEventListener("click", () => {
  let boxAdd = createBoxes(input.value);
  box.append(...boxAdd);
});
destroyBtn.addEventListener("click", () => {
  box.innerHTML = "";
});
