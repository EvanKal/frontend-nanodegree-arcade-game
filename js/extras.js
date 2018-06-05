// Creates elements and appends to body
function loadContainer() {
  let sideContainer = document.createElement("div");
  sideContainer.setAttribute("id", "sideContainer");
  document.body.appendChild(sideContainer);

  let sideContainerTwo = document.createElement("div");
  sideContainerTwo.setAttribute("id", "sideContainerTwo");
  document.body.appendChild(sideContainerTwo);

  let winsMessage = document.createElement("p");
  winsMessage.setAttribute("id", "winsMessage");
  winsMessage.textContent = `You have reached the water:`;
  sideContainer.appendChild(winsMessage);

  let numOFWinsMessage = document.createElement("p");
  numOFWinsMessage.setAttribute("id", "numOFWinsMessage");
  numOFWinsMessage.setAttribute("class", "");
  numOFWinsMessage.textContent = `${player.numOFWins} consecutive times!`;
  sideContainer.appendChild(numOFWinsMessage);

  let yayMessage = document.createElement("i");
  let yayContainer = document.createElement("div");
  yayMessage.setAttribute("class", "fas fa-angle-double-up");
  yayContainer.setAttribute("id", "yayContainer");
  yayContainer.appendChild(yayMessage);
  yayContainer.style.display = "none";
  sideContainer.appendChild(yayContainer);

  let choosePlayerMessage = document.createElement("p");
  choosePlayerMessage.setAttribute("id", "choosePlayerMessage");
  choosePlayerMessage.textContent = `Choose Player!`;
  sideContainerTwo.appendChild(choosePlayerMessage);

  let dropMenu = document.createElement("select");
  dropMenu.setAttribute("id", "dropMenu");
  sideContainerTwo.appendChild(dropMenu);

  let option1 = document.createElement("option");
  option1.setAttribute("value", "char-boy");
  option1.setAttribute("class", "option");
  option1.textContent = `Boy`;
  dropMenu.appendChild(option1);

  let option2 = document.createElement("option");
  option2.setAttribute("value", "char-cat-girl");
  option2.setAttribute("class", "option");
  option2.textContent = `Cat Girl`;
  dropMenu.appendChild(option2);

  let option3 = document.createElement("option");
  option3.setAttribute("value", "char-horn-girl");
  option3.setAttribute("class", "option");
  option3.textContent = `Horn Girl`;
  dropMenu.appendChild(option3);

  let option4 = document.createElement("option");
  option4.setAttribute("value", "char-pink-girl");
  option4.setAttribute("class", "option");
  option4.textContent = `Pink Girl`;
  dropMenu.appendChild(option4);

  let option5 = document.createElement("option");
  option5.setAttribute("value", "char-princess-girl");
  option5.setAttribute("class", "option");
  option5.textContent = `Princess Girl`;
  dropMenu.appendChild(option5);
}

window.addEventListener("DOMContentLoaded", loadContainer());
let e = document.getElementById("dropMenu");
const options = document.getElementsByClassName("option");
const canvas = document.querySelector("canvas");
e.addEventListener("change", removeFocus);

// Removes focus from player selector (after change)
function removeFocus(evt) {
  evt.target.blur();
}

//Sets the text about the sum of consecutive wins
function updateNumOfWins() {
  if (player.numOFWins == 1) {
    numOFWinsMessage.textContent = `${player.numOFWins} time!`;
  } else {
    numOFWinsMessage.textContent = `${player.numOFWins} consecutive times!`;
  }
}

//Sets the player.sprite value according to the selected character
function updateCharacter() {
  player.value = e.options[e.selectedIndex].value;
  player.sprite = `images/${player.value}.png`;
}

//Handles animations
function animations() {
  let getnumOFWinsMessage = document.querySelector("#numOFWinsMessage");
  let getYayContainer = document.querySelector("#yayContainer");
  let getYayMessage = getYayContainer.querySelector("i");
  yayContainer.style.display = "block";
  getYayMessage.classList.add("animated", "bounce");
  getnumOFWinsMessage.classList.add("animated", "flash");
  setTimeout(function() {
    yayContainer.style.display = "none";
    getYayMessage.classList.remove("animated", "bounce");
    getnumOFWinsMessage.classList.remove("animated", "flash");
  }, 700);
}
