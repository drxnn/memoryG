const tilesContainer = document.querySelector(".tiles");

const colors = [
  "aqua",
  "aquamarine",
  "crimson",
  "blue",
  "gold",
  "red",
  "green",
  "orange",
];

// 16 colors below 8 colors x 2 for each tile

const colorsList = [...colors, ...colors];

const tileCount = colorsList.length;

//create all tiles and display on dom :

for (let i = 0; i < tileCount; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "tile");
  tilesContainer.append(newDiv);
}

console.log(colorsList);
