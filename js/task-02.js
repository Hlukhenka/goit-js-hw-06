const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemList = document.querySelector("#ingredients");

const link = ingredients.map((ingredient) => {
    const linkAdd = document.createElement("li");
    linkAdd.textContent = ingredient;
    return linkAdd;
  });

  itemList.append(...link);
