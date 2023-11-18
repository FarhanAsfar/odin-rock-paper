function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice == computerChoice){
        return 'Game Drawn';
    }
    else if(
        (playerChoice == 'rock' && computerChoice == 'scissor') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissor' && computerChoice == 'paper')
    ){
        return 'You Won! '+ playerChoice + ' defeats ' + computerChoice;
    }
    else{
        return 'You Lose! '+ computerChoice + ' defeats ' + playerChoice;
    }
}


function game(){
    for(let i=0;i<5;i++){
        const playerChoice = 'rock'; 
        //const playerChoice = prompt("enter your choice: ");
        const computerChoice = getComputerChoice();

        console.log(playRound(playerChoice, computerChoice));
    }
}

game();