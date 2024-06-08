let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randNum = Math.random() * 10;
    randNum = randNum.toFixed(1);    
    if (randNum > 0 && randNum < 3.4) {        
        return "Rock";
    } else if (randNum >= 3.4 && randNum < 6.7){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let human = prompt("Type: Rock, Paper, Scissors");    
    return human.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    let result;
    console.log(humanChoice, computerChoice)    
    if (humanChoice == "rock" && computerChoice == "Paper"){
        result = "The player loses.";
        computerScore ++;
    }else if(humanChoice == "paper" && computerChoice == "Scissors"){
        result = "The player loses.";
        computerScore ++;
    }else if (humanChoice == "scissors" && computerChoice == "Rock"){
        result = "The player loses.";
        computerScore ++;
    }else if(humanChoice == computerChoice.toLowerCase()){
        result = "This round is a tie."; 
    }
    else{
        result = "You win!";
        humanScore ++;
    }
    console.log(result, humanScore, computerScore);
    
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore){
        console.log("You win");
    }else if (humanScore == computerScore){
        console.log("It's a draw.");
    }else{
        console.log("You lose. Womp, womp.");
    }
}

playGame();


