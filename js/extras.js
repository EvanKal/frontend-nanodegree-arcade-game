function loadContainer() {
  let sideContainer = document.createElement("div");
  sideContainer.setAttribute("id", "sideContainer");
  document.body.appendChild(sideContainer);

  let winsMessage = document.createElement("p");
  winsMessage.setAttribute("id", "winsMessage");
  winsMessage.textContent = `You have reached the water:`;
  sideContainer.appendChild(winsMessage);

  let numOFWinsMessage = document.createElement("p");
  numOFWinsMessage.setAttribute("id", "numOFWinsMessage");
  numOFWinsMessage.textContent = `${player.numOFWins} consecutive times!`;
  sideContainer.appendChild(numOFWinsMessage);
}

window.addEventListener("load", loadContainer());

function updateNumOfWins() {
numOFWinsMessage.textContent = `${player.numOFWins} consecutive times!`;
};
