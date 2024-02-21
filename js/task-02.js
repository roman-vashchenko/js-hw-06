const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  categoryEl: document.querySelector("#ingredients"),
};

function createArrayOfingredients(ingredients) {
  const arr = [];
  for (const ingredien of ingredients) {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredien;
    itemEl.classList.add("item");
    arr.push(itemEl);
  }
  return arr;
}

const arrayOfIngredients = createArrayOfingredients(ingredients);

refs.categoryEl.append(...arrayOfIngredients);
