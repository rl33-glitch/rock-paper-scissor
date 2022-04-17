
//variables for game options

let rockPlayer = document.querySelector(".rock");
let paperPlayer = document.querySelector(".paper");
let scissorsPlayer = document.querySelector(".scissors");
let lizardPlayer = document.querySelector(".lizard");
let spockPlayer = document.querySelector(".spock");

//variable for player option image

let userChoice;
let userChoiceImg;


//variable for computer choice

let computerChoice;
let computerChoiceImg;

//variable for results

let resultText = document.querySelector(".result");
let resultInfo = document.querySelector(".result-info");

// rock option move

rockPlayer.addEventListener("click", rockSelected);

function rockSelected() {
    userChoice = rockPlayer.id;
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/rock-player.png";

    generateComputerChoice();
    getResults();

}

//paper option move

paperPlayer.addEventListener("click", paperSelected);

function paperSelected() {
    userChoice = paperPlayer.id;
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/paper-player.png";

    generateComputerChoice();
    getResults();
}

//scissors option move

scissorsPlayer.addEventListener("click", scissorsSelected);

function scissorsSelected() {
    userChoice = scissorsPlayer.id;
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/scissor-player.png";

    generateComputerChoice();
    getResults();
}

//lizard option move

lizardPlayer.addEventListener("click", lizardSelected);

function lizardSelected() {
    userChoice = lizardPlayer.id;
    userChoiceImg = document.querySelector(".player-selected-img").src =
    "images/lizard-player.png";

    generateComputerChoice();
    getResults();
}

//spock option move

spockPlayer.addEventListener("click", spockSelected);

function spockSelected() {
    userChoice = spockPlayer.id;
    userChoiceImg = document.querySelector(".player-selected-img").src =
    "images/spock-player.png"; 

    generateComputerChoice();
    getResults();
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

function getResults() {
    //draw

    if (userChoice === computerChoice) {
    
        let playerBackgroundColour = document.querySelector(".player-selected");
        playerBackgroundColour.classList.remove("winner");

        let computerBackgroundColour = document.querySelector(".computer-selected");
        computerBackgroundColour.classList.remove("winner");

        resultText.innerHTML = `<i class="fa-solid fa-face-meh-blank"></i>&nbsp;IT'S A DRAW!&nbsp;<i class="fa-solid fa-face-meh-blank"></i>`;
        resultInfo.innerHTML = "Make your move.";
   
    }

    //player wins

    if (userChoice === "rock" && computerChoice === "scissors") {
        let playerBackgroundColour = document.querySelector(".player-selected");
        playerBackgroundColour.classList.add("winner");

        let computerBackgroundColour = document.querySelector(".computer-selected");
        computerBackgroundColour.classList.remove("winner");

        resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
        resultInfo.innerHTML = "Rock crushes scissors";
    }

    if (userChoice === "rock" && computerChoice === "lizard") {

        let playerBackgroundColour = document.querySelector(".player-selected");
        playerBackgroundColour.classList.add("winner");

        let computerBackgroundColour = document.querySelector(".computer-selected");
        computerBackgroundColour.classList.remove("winner");

        resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Rock crushes lizard";
    }

    if (userChoice === "paper" && computerChoice === "rock") {
    
        let playerBackgroundColour = document.querySelector(".player-selected");
        playerBackgroundColour.classList.add("winner");

        let computerBackgroundColour = document.querySelector(".computer-selected");
        computerBackgroundColour.classList.remove("winner");

        resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
        resultInfo.innerHTML = "Paper covers rock";

    }
   
    if (userChoice === "paper" && computerChoice === "spock") {
        

        let playerBackgroundColour = document.querySelector(".player-selected");
        playerBackgroundColour.classList.add("winner");
        let computerBackgroundColour = document.querySelector(".computer-selected");
        computerBackgroundColour.classList.remove("winner");

        
    
    resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Paper disproves Spock";
  }
  

    
}