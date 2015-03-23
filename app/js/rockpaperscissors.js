////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move = prompt("Rock, Paper, Scissors, Shoot!");
    return move;
    if (move = undefined||null){
        getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = Math.random;
    if (move < 0.33){
	move = "rock";
}
	else if (move < 0.66){
	move = "paper";
}	else{
	move = "scissors";
}
    return move;
    if (move = undefined||null){
        randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (computerMove =="rock"){
        if (playerMove=="rock"){
            winner = "tie";}
        else if (playerMove=="scissors") {
            winner = "computer";  }
        else if (playerMove=="paper"){
            winner = "player";
        }
    }
     if (computerMove== "scissors"){
        if (playerMove=="rock"){
            winner = "player";}
        else if (playerMove=="scissors") {
            winner = "tie";  }
        else if (playerMove=="paper"){
            winner = "computer";
        }
    }
     if (computerMove =="paper"){
       if (playerMove=="rock"){
            winner = "computer";}
        else if (playerMove=="scissors") {
            winner = "player";  }
        else if (playerMove=="paper"){
            winner = "tie";
        }
    }
    return winner;
  
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

