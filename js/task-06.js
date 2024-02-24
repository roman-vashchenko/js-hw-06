const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", onBlurValidationInput);

function onBlurValidationInput(e) {
  console.log(e.currentTarget.value.length);
  if (e.currentTarget.value.length >= inputElement.dataset.length) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}
