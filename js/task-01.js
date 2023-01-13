const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

for (let element of categoriesEl.children) {
  console.log(`Category: ${element.children[0].textContent}`);

  console.log(`Technologies: ${element.children[1].children.length}`);
}

