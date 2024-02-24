function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  containeEl: document.getElementById("boxes"),
};

refs.inputEl.addEventListener("input", onInputInputEl);
refs.createBtn.addEventListener("click", onClickCreateBtn);
refs.destroyBtn.addEventListener("click", onClickDestroyBtn);

let amount = 0;
let widthElement = 30;
let heightElement = 30;

function onInputInputEl(e) {
  const value = e.currentTarget.value;
  amount = value;
}

function createBoxes(amount) {
  const arrayBoxs = [];

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${widthElement}px`;
    box.style.height = `${heightElement}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxs.push(box);
    widthElement += 10;
    heightElement += 10;
  }

  return arrayBoxs;
}

function onClickCreateBtn() {
  const elements = createBoxes(amount);
  refs.containeEl.append(...elements);
}

function destroyBoxes() {
  return (refs.containeEl.innerHTML = "");
}

function onClickDestroyBtn() {
  destroyBoxes();
  widthElement = 30;
  heightElement = 30;
}
