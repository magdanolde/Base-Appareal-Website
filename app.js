console.log("dziala");

const button = document.querySelector(".input__button");
const emailField = document.querySelector(".main__input--email");
const error = document.querySelector(".main__error");
const errorSign = document.querySelector(".input__error");
console.log(errorSign);

button.addEventListener("click", validateInput);

function validateInput(e) {
  e.preventDefault();
  if (!emailField.value.includes("@")) {
    error.classList.remove("main__error");
    errorSign.classList.remove("input__error");
    error.classList.add("main__error--active");
    errorSign.classList.add("input__error--active");
  } else {
    error.classList.remove("main__error--active");
    error.classList.add("main__error");
    errorSign.classList.remove("input__error--active");
    errorSign.classList.add("input__error");
    emailField.value = " ";
  }
}
