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
    let player = 0;
    let computer = 0;
    for(let i=0;i<5;i++){
        //const playerChoice = 'rock'; 
        const playerChoice = prompt("Enter your choice(rock, paper, scissor): ");
        const computerChoice = getComputerChoice();

        const result = (playRound(playerChoice, computerChoice));
        console.log(result);

        if(result.includes("Won")){
            player++;
        }else if(result.includes("Lose")){
            computer++;
        }
    }
    console.log('Player Wins: '+player);
    console.log('Computer Wins: '+computer);

    if(player>computer){
        prompt("You Won the Round!");
    }else if(computer>player){
        prompt("Computer Won the Round!");
    }else{
        prompt("Round Tied");
    }
}

game();