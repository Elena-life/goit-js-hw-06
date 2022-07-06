const textEl = document.querySelector("#text");

const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", (e) => {
  const size = inputEl.value;
  // console.log(inputEl.target.value);

  textEl.style.fontSize = inputEl.value + "px";
});

