
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
       result = 'You Win Homie!';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
       result = 'You Lose Loser!';
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        result = 'You Win Homie!';
    } else if(computerSelection == 'paper' && playerSelection == 'rock') {
        result = 'You Lose Loser!';
    } else if(playerSelection == 'scissors' && computerSelection =='paper'){
        result = 'You Win Homie!';
    } else if(computerSelection == 'scissors' && playerSelection == 'paper'){
       result = 'You Lose Loser!';
    } else if(playerSelection == computerSelection) {
       result =  'I\'ts a Tie Babe!';
    }
   return result;
}

const userChoice = 'rock';
console.log(userChoice);
const compChoice = getComputerChoice();
console.log(compChoice);
console.log(playRound(userChoice,compChoice));

function game() {
    
}