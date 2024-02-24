const refs = {
  formEl: document.querySelector(".login-form"),
  submitBtn: document.querySelector("button"),
};

refs.formEl.addEventListener("submit", onSubmitFormEl);

function onSubmitFormEl(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "")
    return alert("Всі поля повинні бути заповнені.");

  const objData = {
    email: email.value,
    password: password.value,
  };
  console.log(objData);
  refs.formEl.reset();
}
