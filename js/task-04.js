const btnDecrEl = document.querySelector("[data-action='decrement']");
const btnIncrEl = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

const btnClick = () => {
  counterValue = valueEl.textContent;
  valueEl.textContent = parseInt(counterValue) + 1;
};
btnIncrEl.addEventListener("click", btnClick);

const ofBtnClick = () => {
  counterValue = valueEl.textContent;
  valueEl.textContent = parseInt(counterValue) - 1;
};

btnDecrEl.addEventListener("click", ofBtnClick);


console.log(btnDecrEl);
console.log(btnIncrEl);
console.log(valueEl);
