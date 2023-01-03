//gets the computer choice by using a random number to choose an output in the switch statement
function getComputerChoice() {
    const computerValue = Math.floor((Math.random() * 3))+ 1;
    switch(computerValue) {
        case 1: 
        return 'rock';
        case 2:
        return 'scissors';
        case 3:
        return 'paper';
        
    }

}

let result = '';
let userScore = 0;
let compScore = 0;

// comparing computer and user choice to see who won , lose, or tie

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
       result = 'You Win Homie!';
       userScore++;
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
       result = 'You Lose Loser!';
       compScore++;
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        result = 'You Win Homie!';
        userScore++;
    } else if(computerSelection == 'paper' && playerSelection == 'rock') {
        result = 'You Lose Loser!';
        compScore++;
    } else if(playerSelection == 'scissors' && computerSelection =='paper'){
        result = 'You Win Homie!';
        userScore++;
    } else if(computerSelection == 'scissors' && playerSelection == 'paper'){
       result = 'You Lose Loser!';
       compScore++;
    } else if(playerSelection == computerSelection) {
       result =  'I\'ts a Tie Babe!';
    }
   return result;
}
// play 5 rounds of the game, whichever has >3 wins the game 
function game() {
    for(let i = 0; i <= 5; i++) {
        const userChoice = prompt('Please enter : rock, paper, or scissors');
        console.log(userChoice);
        const compChoice = getComputerChoice();
        console.log(compChoice);
        console.log(playRound(userChoice,compChoice));
        console.log(userScore);
        console.log(compScore);
    }
    if(userScore == 5 || userScore >= 3) {
        return 'You won The Entire Game Babe';
    } else if (compScore == 5 || compScore >=3) {
        return 'Geez, Always Losing Headass, The Computer Won';
    } else {
        return 'Thought this was impossible , but tie';
    }
}
console.log(game());