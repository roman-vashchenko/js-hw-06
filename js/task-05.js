const refs = {
  inputEl: document.getElementById("name-input"),
  spanEl: document.getElementById("name-output"),
};

refs.inputEl.addEventListener("input", onInputInputEl);

function onInputInputEl(event) {
  refs.spanEl.textContent = event.currentTarget.value;
}
