function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  nameColor: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", onclickChangeColorBtn);

function onclickChangeColorBtn() {
  refs.nameColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
