const choices = ["rock","paper","scissors"];
function getComputerChoice(arr) {
    return computerSelection = arr[Math.floor((Math.random() * choices.length))].toLowerCase();
}

getComputerChoice(choices)

let playerSelection = prompt("Choose between Rock, Paper or Scissors:").toLowerCase()

function check(PlayerChoice) {
    if (PlayerChoice != "rock" && PlayerChoice != "paper" && PlayerChoice != "scissors") {
        console.log("Invalid Input. Try again.")
    }
    else {
        console.log("Choice accepted! Let's Play!")
    }
}

check(playerSelection);

console.log(computerSelection, playerSelection);

function match(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return console.log("It is a tie!")
    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection=="scissors" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "rock")) {
        return console.log("Computer wins!")
    } else {
        return console.log("Player wins!")
    }
} 

match(computerSelection, playerSelection);