const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);

const inputValidation = function (event) {
  const value = event.currentTarget.value;

  if (value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};
inputEl.addEventListener("blur", inputValidation);