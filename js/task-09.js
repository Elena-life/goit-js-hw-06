function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const groundColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  groundColor.textContent = changeColor;
});