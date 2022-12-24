const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formdata = {
    email,
    password,
  };

  if (email === "" || password === "") {
    return alert("Заповніть всі поля");
  }
  console.log(formdata);
  event.currentTarget.reset();
}
