const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listTitleElArr = ingredients.map((element) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = element;
  listItemEl.classList.add("item");

  return listItemEl;
});
document.querySelector("#ingredients").append(...listTitleElArr);
