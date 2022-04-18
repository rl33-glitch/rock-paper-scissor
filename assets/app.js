//
// player name
//

let nameForm = document.querySelector("#name-form");
nameForm.addEventListener("submit", changePlayerName);

function changePlayerName(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#name-text-input");

  let playerName = document.querySelector(".player-name");
  playerName.innerHTML = `${nameInput.value}`;

  let playerName480 = document.querySelector(".player-name-480");
  playerName480.innerHTML = `${nameInput.value}`;

  let formContainer = document.querySelector(".enter-name-wrapper");
  formContainer.classList.add("hidden");
}

//
// player name ends 
//

//
// menu starts
//

let menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", openMenu);

let menuButton480 = document.querySelector("#menu-button-480");
menuButton480.addEventListener("click", openMenu);

function openMenu(event) {
  event.preventDefault();

  let menu = document.querySelector(".menu-wrapper");
  menu.classList.add("menu-show");
}

let closeButton = document.querySelector(".close");
closeButton.addEventListener("click", closeMenu);

let resumeButton = document.querySelector("#resume");
resumeButton.addEventListener("click", closeMenu);

function closeMenu(event) {
  event.preventDefault();

  let menu = document.querySelector(".menu-wrapper");
  menu.classList.remove("menu-show");
}

//
// menu ends
//

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
let playerBackgroundColour = document.querySelector(".player-selected");
let computerBackgroundColour = document.querySelector(".computer-selected");
let userScore = 0;
let computerScore = 0;
let userScoreResult = document.querySelector(".player-score");
let computerScoreResult = document.querySelector(".computer-score");

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
    
        
        playerBackgroundColour.classList.remove("winner");
        computerBackgroundColour.classList.remove("winner");

        resultText.innerHTML = `<i class="fa-solid fa-face-meh-blank"></i>&nbsp;IT'S A DRAW!&nbsp;<i class="fa-solid fa-face-meh-blank"></i>`;
        resultInfo.innerHTML = "Make your move.";
    
    }

    //player wins

    if (userChoice === "rock" && computerChoice === "scissors") {
        
        playerBackgroundColour.classList.add("winner");
        computerBackgroundColour.classList.remove("winner");

        resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
        resultInfo.innerHTML = "Rock crushes scissors";

        userScore++;
    userScoreResult.innerHTML = userScore;
    }

    if (userChoice === "rock" && computerChoice === "lizard") {

        
        playerBackgroundColour.classList.add("winner");
        computerBackgroundColour.classList.remove("winner");

        resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Rock crushes lizard";

    userScore++;
    userScoreResult.innerHTML = userScore;
    }

    if (userChoice === "paper" && computerChoice === "rock") {
    
       
        playerBackgroundColour.classList.add("winner");
        computerBackgroundColour.classList.remove("winner");

        resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
        resultInfo.innerHTML = "Paper covers rock";

        userScore++;
    userScoreResult.innerHTML = userScore;

    }
   
    if (userChoice === "paper" && computerChoice === "spock") {
        
            playerBackgroundColour.classList.add("winner");
            computerBackgroundColour.classList.remove("winner");

        
    
    resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Paper disproves Spock";

    userScore++;
    userScoreResult.innerHTML = userScore;
  }
  
  if ( userChoice === "scissors" && computerChoice === "paper") {

        playerBackgroundColour.classList.add("winner");
        computerBackgroundColour.classList.remove("winner");

    resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Scissors cuts Paper";

    userScore++;
    userScoreResult.innerHTML = userScore;
  }

  if (userChoice === "scissors" && computerChoice === "lizard") {
  

        playerBackgroundColour.classList.add("winner");
        computerBackgroundColour.classList.remove("winner");

    
    resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Scissors decapitates Lizard";

    userScore++;
    userScoreResult.innerHTML = userScore;
  }

  if (userChoice === "lizard" && computerChoice === "paper") {
    
    playerBackgroundColour.classList.add("winner");
    computerBackgroundColour.classList.remove("winner");

   
    resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Lizard eats paper";

    userScore++;
    userScoreResult.innerHTML = userScore;
  }

  if (userChoice === "lizard" && computerChoice === "spock") {
    

    
    playerBackgroundColour.classList.add("winner");
    computerBackgroundColour.classList.remove("winner");

    
    resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Lizard poisons Spock";

    userScore++;
    userScoreResult.innerHTML = userScore;
  }

  if (userChoice === "spock" && computerChoice === "scissors") {
    
   playerBackgroundColour.classList.add("winner");
    computerBackgroundColour.classList.remove("winner");

    
   
    resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Spock smashes scissors";

    userScore++;
    userScoreResult.innerHTML = userScore;
  }

  if (userChoice === "spock" && computerChoice === "rock") {
    
    playerBackgroundColour.classList.add("winner");
    computerBackgroundColour.classList.remove("winner");

   
    
    resultText.innerHTML = `<i class="fa-solid fa-star"></i>&nbsp;YOU WIN!&nbsp;<i
            class="fa-solid fa-star"
          ></i
        >`;
    resultInfo.innerHTML = "Spock vaporizes rock";

    userScore++;
    userScoreResult.innerHTML = userScore;
  }

  //player loose

  if (computerChoice === "rock" && userChoice === "scissors") {

    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

    
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Rock crushes scissors";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "rock" && userChoice === "lizard") {
    
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

    
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Rock crushes lizard";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "paper" && userChoice === "rock") {
    
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

   
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Paper covers rock";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "paper" && userChoice === "spock") {
    
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

   
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Paper disproves Spock";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "scissors" && userChoice === "paper") {
    
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

    
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Scissors cuts Paper";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "scissors" && userChoice === "lizard") {
    
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

   
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Scissors decapitates Lizard";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "lizard" && userChoice === "paper") {
   
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

   
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Lizard eats paper";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "lizard" && userChoice === "spock") {
   
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

    
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Lizard poisons Spock";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "spock" && userChoice === "scissors") {
    
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

    
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Spock smashes scissors";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }

  if (computerChoice === "spock" && userChoice === "rock") {
    
    playerBackgroundColour.classList.remove("winner");
    computerBackgroundColour.classList.add("winner");

    
    resultText.innerHTML = `<i class="fa-solid fa-heart-crack"></i></i>&nbsp;YOU LOST!&nbsp;<i class="fa-solid fa-heart-crack"></i>`;
    resultInfo.innerHTML = "Spock vaporizes rock";
    computerScore++;
    computerScoreResult.innerHTML = computerScore;
  }



    
}