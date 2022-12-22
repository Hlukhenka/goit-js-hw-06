const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const itemPotatoes = document.createElement("li");
// itemPotatoes.textContent = ingredients[0];
// itemPotatoes.classList = "item";

// const itemMushrooms = document.createElement("li");
// itemMushrooms.textContent = ingredients[1];
// itemMushrooms.classList = "item";

// const itemGarlic = document.createElement("li");
// itemGarlic.textContent = ingredients[2];
// itemGarlic.classList = "item";

// const itemTomatos = document.createElement("li");
// itemTomatos.textContent = ingredients[3];
// itemTomatos.classList = "item";

// const itemHerbs = document.createElement("li");
// itemHerbs.textContent = ingredients[4];
// itemHerbs.classList = "item";

// const itemCondiments = document.createElement("li");
// itemCondiments.textContent = ingredients[5];
// itemCondiments.classList = "item";

const itemList = document.querySelector("#ingredients");
// itemList.append(
//   itemPotatoes,
//   itemMushrooms,
//   itemGarlic,
//   itemTomatos,
//   itemHerbs,
//   itemCondiments
// );

const link = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

itemList.innerHTML = link;
