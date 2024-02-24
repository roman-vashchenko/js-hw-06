const refs = {
  inputEl: document.getElementById("font-size-control"),
  textEl: document.getElementById("text"),
};

refs.inputEl.addEventListener("input", onInputInputEl);

function onInputInputEl(e) {
  refs.textEl.style.fontSize = `${e.currentTarget.value}px`;
}
