const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const categoriesArray = [...allCategories]
  .map(categories => 
`Category: ${categories.firstElementChild.textContent}
Elements: ${categories.children[1].children.length}`)
  .join("\n");

console.log(categoriesArray);
console.log(allCategories)



// document.querySelectorAll(".item").forEach((elLi) => {
    
//   const title = elLi.children[0]; 
//   const list = elLi.children[1];

//   console.log(title.textContent);
//   console.log(list.children.length);
// });