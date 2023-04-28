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

function resetScore(){
    const ifPlayerChoice = document.querySelector('#playerChoice');
    if (ifPlayerChoice != null)
        results.removeChild(ifPlayerChoice)
    const ifComputerChoice = document.querySelector('#computerChoice');
    if (ifComputerChoice != null)
        results.removeChild(ifComputerChoice)
    const ifFinalResult = document.querySelector('#finalResult');
    if (ifFinalResult != null)
        results.removeChild(ifFinalResult)
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
    

    

    const results = document.querySelector('#results');
    //console.log("You choose: " + playerSelection)

    //if playerChoice, computerChoice and finalResult exists, delete them (RESET SCORE)
    resetScore()

    
    const playerChoice = document.createElement('div');
    playerChoice.setAttribute('id','playerChoice')
    playerChoice.textContent = "You choose: " + playerSelection;
    results.append(playerChoice);
    

    //console.log("Computer choose: " + computerSelection)
    const computerChoice = document.createElement('div');
    computerChoice.setAttribute('id','computerChoice')
    computerChoice.textContent = "Computer choose: " + computerSelection;
    results.append(computerChoice);

    // Result
    const finalResult = document.createElement('div');
    finalResult.setAttribute('id','finalResult')

    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        finalResult.textContent = "You Win! "+ playerSelection + " beats " + computerSelection;
        /*return 1;*/
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        finalResult.textContent = "You Win! "+ playerSelection + " beats " + computerSelection;
        /*return 1;*/
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        finalResult.textContent = "You Win! "+ playerSelection + " beats " + computerSelection;
        /*return 1;*/
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        finalResult.textContent = "You Lose! "+ computerSelection + " beats " + playerSelection;
        /*return 0;*/
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        finalResult.textContent = "You Lose! "+ computerSelection + " beats " + playerSelection;
        /*return 0;*/
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        finalResult.textContent = "You Lose! "+ computerSelection + " beats " + playerSelection;
        /*return 0;*/
    }
    else {
        finalResult.textContent = "Draw!";
        /*return -1;*/
    }
    /*return -1;*/
    results.append(finalResult)
}

const btns = document.querySelectorAll('#btn');

btns.forEach((btn) => {
    btn.addEventListener('click', ()=> {
        playGame(btn.textContent.toLowerCase(), getComputerChoice());
    });
});
