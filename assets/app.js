
//variables for game options

let rockPlayer = document.querySelector(".rock");
let paperPlayer = document.querySelector(".paper");
let scissorsPlayer = document.querySelector(".scissors");
let lizardPlayer = document.querySelector(".lizard");
let spockPlayer = document.querySelector(".spock");

//variable for player option image
let userChoiceImg;

// rock option move

rockPlayer.addEventListener("click", rockSelected);

function rockSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/rock-player.png";

}

//paper option move

paperPlayer.addEventListener("click", paperSelected);

function paperSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/paper-player.png";
}

//scissors option move

scissorsPlayer.addEventListener("click", scissorsSelected);

function scissorsSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src = "images/scissor-player.png";
}

//lizard option move

lizardPlayer.addEventListener("click", lizardSelected);

function lizardSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src =
    "images/lizard-player.png";
}

//spock option move

spockPlayer.addEventListener("click", spockSelected);

function spockSelected() {
    userChoiceImg = document.querySelector(".player-selected-img").src =
    "images/spock-player.png";
}