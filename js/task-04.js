const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector(
  "#counter button[data-action=increment]"
);
const decrementBtn = document.querySelector(
  "#counter button[data-action=decrement]"
);

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});
