const btnDecrEl = document.querySelector("[data-action='decrement']");
const btnIncrEl = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

btnDecrEl.addEventListener("click", (event) => {
  //   console.log(event.target);
  const tableValue = valueEl.textContent;
  valueEl.textContent = tableValue - 1;
});
btnIncrEl.addEventListener("click", (event) => {
  //   console.log(event.target);
  const tableValue = valueEl.textContent;
  console.log(typeof tableValue);
  valueEl.textContent = Number(tableValue) + 1; // 0 + 111
});

console.log(btnDecrEl);
console.log(btnIncrEl);
console.log(valueEl);