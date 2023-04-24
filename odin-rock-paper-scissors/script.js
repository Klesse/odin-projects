// 0 - Rock
// 1 - Paper
// 2 - Scissors

function getComputerChoice () {
    number = Math.floor(Math.random() * 3)
    switch (number){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
    
    return 'paper';
}

function getPlayerChoice(){
    result = prompt("Enter your choice").toLowerCase();
    while (result != "rock" && result != "paper" && result != "scissors"){
        result = prompt("Enter a valid choice").toLowerCase();
    }
    return result;
}

function playGame(playerSelection, computerSelection){
    // Uppercase First Letter
    let firstLetter1 = playerSelection.charAt(0);
    let firstLetter2 = computerSelection.charAt(0);
    firstLetter1 = firstLetter1.toUpperCase();
    firstLetter2 = firstLetter2.toUpperCase();
    remainingLetters1 = playerSelection.slice(1);
    remainingLetters2 = computerSelection.slice(1);
    playerSelection = firstLetter1 + remainingLetters1;
    computerSelection = firstLetter2 + remainingLetters2;
    console.log(computerSelection)


    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log("You Win! "+ playerSelection + " beats " + computerSelection);
        return 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        console.log("You Win! "+ playerSelection + " beats " + computerSelection);
        return 1;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log("You Win! "+ playerSelection + " beats " + computerSelection);
        return 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log("You Lose! "+ computerSelection + " beats " + playerSelection);
        return 0;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        console.log("You Lose! "+ computerSelection + " beats " + playerSelection);
        return 0;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        console.log("You Lose! "+ computerSelection.charAt(0) + " beats " + playerSelection.charAt(0));
        return 0;
    }
    else {
        console.log("Draw!")
        return -1;
    }
    return -1;

}

function game(){
    let computerCounter=0;
    let playerCounter=0;
    for(let i=0;i<5;i++){
        result = playGame(getPlayerChoice(),getComputerChoice());
        if (result == 0)
            computerCounter++;
        else if (result ==1)
            playerCounter++;
    }
    if (playerCounter > computerCounter)
        console.log("Player Wins!")
    else if (computerCounter > playerCounter)
        console.log("Computer Wins!")
    else
        console.log("Draw!")
}