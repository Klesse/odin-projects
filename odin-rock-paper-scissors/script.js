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
    const ifFinalScore = document.querySelector('#finalScore');
    if (ifFinalScore != null)
        results.removeChild(ifFinalScore)
}

function resetButton(){
    resetScore();
    total_score = 0
    player_score = 0
    computer_score = 0
}

total_score = 0
player_score = 0
computer_score = 0

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
    

    //if playerChoice, computerChoice and finalResult exists, delete them (RESET SCORE)
    resetScore()

    //console.log("You choose: " + playerSelection)
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
        player_score++;
        /*return 1;*/
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        finalResult.textContent = "You Win! "+ playerSelection + " beats " + computerSelection;
        player_score++;
        /*return 1;*/
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        finalResult.textContent = "You Win! "+ playerSelection + " beats " + computerSelection;
        player_score++;
        /*return 1;*/
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        finalResult.textContent = "You Lose! "+ computerSelection + " beats " + playerSelection;
        computer_score++;
        /*return 0;*/
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        finalResult.textContent = "You Lose! "+ computerSelection + " beats " + playerSelection;
        computer_score++;
        /*return 0;*/
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        finalResult.textContent = "You Lose! "+ computerSelection + " beats " + playerSelection;
        computer_score++;
        /*return 0;*/
    }
    else {
        finalResult.textContent = "Draw!";
        /*return -1;*/
    }
    /*return -1;*/
    results.append(finalResult)
    total_score++;

    if (total_score == 5){
        total_score = 0;
        const finalScore = document.createElement('div');
        finalScore.setAttribute('id','finalScore');
        if (player_score > computer_score)
            finalScore.textContent = "Player Wins - P:" + player_score + ' C:'+ computer_score;
        else if(computer_score > player_score)
            finalScore.textContent = "Computer Wins - P:" + player_score + ' C:'+ computer_score;
        else
            finalScore.textContent = "Draw! - P:" + player_score + ' C:'+ computer_score;
        
        results.append(finalScore)
        player_score = 0;
        computer_score = 0;
    }
}

const btns = document.querySelectorAll('#btn');

btns.forEach((btn) => {
    btn.addEventListener('click', ()=> {
        playGame(btn.textContent.toLowerCase(), getComputerChoice());
    });
});

const btn_reset = document.querySelector('#btn-reset')
btn_reset.addEventListener('dblclick',() => {resetButton();})


resetButton()
