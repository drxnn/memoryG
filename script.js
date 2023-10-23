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

//create all tiles and display on dom, assign color to them randomly

for (let i = 0; i < tileCount; i++) {
  const tileElement = document.createElement("div");
  let randomIndex = Math.floor(Math.random() * colorsList.length);

  tileElement.setAttribute("class", "tile");
  const color = colorsList[randomIndex];

  tileElement.setAttribute("data-color", color);

  colorsList.splice(randomIndex, 1);

  tilesContainer.append(tileElement);
  tileElement.addEventListener("click", checkTile);
}

console.log(colorsList);

// GUIDE LINE
// Game States: we need 3 variables, how many tiles have been revealed, starts at 0 tiles revealed, activeTile
let revealedCount = 0;
let activeTile = null;
let secondElement = null;
let awaitingEndOfMove = false;

function checkTile(e) {
  if (awaitingEndOfMove === true) {
    return;
  }
  // active tile is first element, secondElement is second element
  let clickedElement = e.target;
  if (!activeTile) {
    activeTile = clickedElement.getAttribute("data-color");
  } else {
    secondElement = clickedElement.getAttribute("data-color");
    clickedElement.style.backgroundColor = secondElement;
  }

  if (activeTile === secondElement) {
    clickedElement.style.backgroundColor = "#333333";
  }
  console.log(activeTile, secondElement);
}

// in the for loop, get a randomIndex and apply the color from the colorsList to the newly created Divs
// when a color is added to the tile, remove that color from the list using .splie() so that we dont get the same color twice
// add event Listener to the tile and pass function that checks if awaitingEndOfMove is true just return, do not allow the user to do anything for a second or two, otherwise reveal color
// if !activeTile, activeTile = element(tile) & then return function, active tile has to be the first element clicked so that we can compare if the colors of first element and second element are the same
//if users 2 choices dont match = awaitingEndOfMove = true;
// use a setTimeout function(), element && activeTile . background color == null, because user was wrong so we need to set the tiles back to the black color, then put awaitingEndOfMove = false and activeTile = null so that user can click again
// activeTile = first Tile clicked, element = second tile click
// Then check if what the user clicked are matching colors, if they are, remove the two tiles from the dom, revealedCount += 2, if the revealedCount === tileCount(display winning message)
// if 2 tiles match, add a data-message of "data-revealed"= true, if data-revealed === true, user cannot click again on the same tile, because it has been revealed(put this at the top of the function, simple if statement)
// also make it so user cannot click on the same tile again, something like element === activeTile{return})
// if user removes all tiles, he wins
// display winning message at the end
//
//
