////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    if (move === undefined||null){
        return getInput();
         
   }
    return move;
}

function getComputerMove(move){
    if (move === undefined||null){
        return randomPlay();
    }
    return move;
}


function getWinner(pMove,cMove) {
    var winner;
    if (pMove === cMove){
        winner = "tie"; }
    else if ((pMove === "rock" && cMove === "scissors") || (pMove ==="scissors" && cMove === "paper") || (pMove ==="paper" && cMove === "rock")){
        winner = "player";
    }
    else if ((pMove === "scissors" && cMove === "rock") || (pMove ==="rock" && cMove === "paper") || (pMove ==="paper" && cMove === "scissors")){
        winner = "computer";
    }
    else {
        console.log("getWinner variables invalid");
    }

return winner;}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    console.log ("Let's play Rock, Paper, Scissors!");
    while ((playerWins || computerWins)<5) {
    getPlayerMove();
    console.log("got p1 move");
    console.log("You choose "+ getPlayerMove());
    getComputerMove();
    console.log("got comp move");
    console.log("Computer chose " +getComputerMove());
    getWinner(getPlayerMove(), getComputerMove());
    console.log("The Winner is "+ getWinner() + "!");
        if (getWinner() === "player") {
         playerWins+=1;
         console.log(playerWins, computerWins);}
        else if (getWinner() === "computer") {
         computerWins+=1;
         console.log(playerWins, computerWins);
        }
        else if (getWinner() === "tie") {
        console.log("Computer and Player both chose "+getPlayerMove()+ ", it's a tie!");
            console.log(playerWins, computerWins);
        }}
    
    if (playerWins === 5){
	  console.log("Congratulations! You win!");
      return [playerWins, computerWins];
    }
    else if (computerWins ===5) {
	  console.log("Computer wins! Oh no!");
      return [playerWins, computerWins];
    }
    
    return [playerWins, computerWins];}
