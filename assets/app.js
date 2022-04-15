
//variables for game options

let rockPlayer = document.querySelector(".rock");
let paperPlayer = document.querySelector(".paper");
let scissorsPlayer = document.querySelector(".scissors");
let lizardPlayer = document.querySelector(".lizard");
let spockPlayer = document.querySelector(".spock");

//variable for player option image

let userChoiceImg;

//variable for computer choice

let computerChoice;
let computerChoiceImg;


// rock option move

rockPlayer.addEventListener("click", rockSelected);

function rockSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/rock-player.png";

    generateComputerChoice();

}

//paper option move

paperPlayer.addEventListener("click", paperSelected);

function paperSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/paper-player.png";

    generateComputerChoice();
}

//scissors option move

scissorsPlayer.addEventListener("click", scissorsSelected);

function scissorsSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/scissor-player.png";

    generateComputerChoice();
}

//lizard option move

lizardPlayer.addEventListener("click", lizardSelected);

function lizardSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src =
    "images/lizard-player.png";

    generateComputerChoice();
}

//spock option move

spockPlayer.addEventListener("click", spockSelected);

function spockSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src =
    "images/spock-player.png"; 

    generateComputerChoice();
}

//computer choice

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() *5) + 1;

    let computerPossibilities = [
        "0", "rock", "paper", "scissors", "lizard", "spock"
    ];

    computerChoice = computerPossibilities[randomNumber];
    console.log(computerChoice);

    if (computerChoice === "rock") {
       computerChoiceImg = document.querySelector(".computer-selected-img").src =
       "images/rock-computer.png";
    }

    if (computerChoice === "paper") {
        computerChoiceImg = document.querySelector(".computer-selected-img").src =
        "images/paper-computer.png";
    }

    if (computerChoice === "scissors") {
        computerChoiceImg = document.querySelector(".computer-selected-img").src =
          "images/scissor-computer.png";
      }
    
    if (computerChoice === "lizard") {
        computerChoiceImg = document.querySelector(".computer-selected-img").src =
          "images/lizard-computer.png";
      }
    
    if (computerChoice === "spock") {
        computerChoiceImg = document.querySelector(".computer-selected-img").src =
          "images/spock-computer.png";
      }
}