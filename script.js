// Helper function to get elements
function $(el) {
  if (el.charAt(0) === "#") {
    // if el begins with # then find element with id
    return document.getElementById(el.substring(1));
  } else {
    return document.querySelector(el);
  }
}

const playerScoreEl = $("#playerScore");
const playerChoiceEl = $("#playerChoice");

const computerScoreEl = $("#computerScore");
const computerChoiceEl = $("#computerChoice");

const resultText = $("#resultText");

// Player Icons
const playerRock = $("#playerRock");
const playerPaper = $("#playerPaper");
const playerScissors = $("#playerScissors");
const playerLizard = $("#playerLizard");
const playerSpock = $("#playerSpock");

// Computer Icons
const computerRock = $("#computerRock");
const computerPaper = $("#computerPaper");
const computerScissors = $("#computerScissors");
const computerLizard = $("#computerLizard");
const computerSpock = $("#computerSpock");

// Array of All font awesome icons
const allGameIcons = document.querySelectorAll(".fa-regular");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

// Reset all "selected" icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// Passing player selection value and styling icons
function select(playerChoice) {
  // Remove "selected" class from all other icons
  resetSelected();
  // Add "selected" styling & playerChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
