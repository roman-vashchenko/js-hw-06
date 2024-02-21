const refs = {
  categoriesEl: document.querySelector("#categories"),
  itemEL: document.querySelectorAll(".item"),
};

console.log(`Number of categories: ${refs.categoriesEl.children.length}`);

refs.itemEL.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);

  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
