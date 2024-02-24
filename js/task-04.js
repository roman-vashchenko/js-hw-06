const refs = {
  decrementBtn: document.querySelector("button[data-action=decrement]"),
  incrementtBtn: document.querySelector("button[data-action=increment]"),
  valueEl: document.getElementById("value"),
};

refs.decrementBtn.addEventListener("click", onClickDecrementBtn);
refs.incrementtBtn.addEventListener("click", onClickIncrementBtn);

function onClickDecrementBtn() {
  refs.valueEl.textContent = +refs.valueEl.textContent - 1;
}

function onClickIncrementBtn() {
  refs.valueEl.textContent = +refs.valueEl.textContent + 1;
}
