const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector('#ingredients');

const itemsList = ingredients.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = el;
  itemEl.classList.add("item");
  return itemEl;
});
list.append(...itemsList);





// let list = document.querySelector("ingredients");
// let items = document.createElement("li");
// let el = ingredients.map((ingredient) => {
//   return `<li>${ingredient}</li>`
// })
// .join("");
// list.insertAdjacentHTML("beforebegin", el);
// console.log(el);


