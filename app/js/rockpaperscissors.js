////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    playerMove = prompt();
    return playerMove;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerMove ='"rock"';
        return computerMove;
    } else if (randomNumber < 0.66) {
        computerMove = '"paper"';
        return computerMove;
    } else {
        computerMove = '"scissors"';
        return computerMove;
    }
    
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var winner;
var playerMove;
var computerMove;
function getPlayerMove(move) {
    playerMove = move;
    if (move === undefined||null){
        getInput();
   }
    return move;
}

function getComputerMove(move){
    computerMove = move;
    if (move === undefined||null){
        randomPlay();
    }
    return move;
}


function getWinner(pMove,cMove) {
    if (pMove === cMove){
        winner = "tie"; }
    else if ((pMove === '"rock"' && cMove === '"scissors"') || (pMove ==='"scissors"' && cMove === '"paper"') || (pMove ==='"paper"' && cMove === '"rock"')){
        winner = "player";
    }
    else if ((pMove === '"scissors"' && cMove === '"rock"') || (pMove ==='"rock"' && cMove === '"paper"') || (pMove ==='"paper"' && cMove === '"scissors"')){
        winner = "computer";
    }
    else {
        console.log("getWinner variables invalid")
    }

return winner;}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    console.log ("Let's play Rock, Paper, Scissors!");
    while ((playerWins || computerWins)<5) {
    getPlayerMove();
    console.log("You choose "+playerMove);
    getComputerMove();
    console.log("Computer chose " +computerMove);
    winner = null;
    getWinner(playerMove, computerMove);
    console.log("The Winner is "+ winner + "!");
        if (winner === "player") {
         playerWins+=1; }
        else if (winner === "computer") {
         computerWins+=1;}
        else if (winner === "tie") {
        console.log("Computer and Player both chose "+playerMove+ ", it's a tie!")}
    console.log(playerWins, computerWins)
    if (playerWins === 5){
	  console.log("Congratulations! You win!")
      return [playerWins, computerWins]
    }
    else if (computerWins ===5) {
	  console.log("Computer wins! Oh no!")
      return [playerWins, computerWins]
    }
    }
    return [playerWins, computerWins];}

////Hello GA! This is my original code for RPS which works, although I used some tricky variables that Briana (I think that was her name) said was not the intent of the exercise. The other file "rockpaperscissorsnoglobvar" contains my attempt to use functions and returns to playToFive. Unfortunately, changing the code caused my while loop to behave strangely, so I'm not sure what to do there. -Connor
///
