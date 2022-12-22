const input = document.querySelector("#validation-input");
const inputLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", onInputCheck);

function onInputCheck(event) {
  if (event.currentTarget.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (event.currentTarget.value.length !== inputLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
