const categorigesEl = document.querySelector("#categories");

const categorigesIt = categorigesEl.querySelectorAll(".item");
console.log("Number of categories: ", categorigesIt.length);

console.log("Category: ", categorigesIt[0].querySelector("h2").textContent);
console.log("Elements: ",categorigesIt[0].querySelectorAll("li").length);

console.log("Category: ", categorigesIt[1].querySelector("h2").textContent);
console.log("Elements: ",categorigesIt[1].querySelectorAll("li").length);

console.log("Category: ", categorigesIt[2].querySelector("h2").textContent);
console.log("Elements: ",categorigesIt[2].querySelectorAll("li").length);