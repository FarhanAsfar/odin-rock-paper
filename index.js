function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    const randomChoice = choices[randomIndex];

    return randomChoice;
}

function playRound(playerChoice, computerChoice){
    if(playerChoice=='rock' && computerChoice=='paper'){
        return 'You Lose! '+computerChoice+' beats '+playerChoice;
    }
    else if(playerChoice=='rock' && computerChoice=='scissor'){
        return 'you won! '+playerChoice+' beats '+computerChoice;
    }
    else if(playerChoice=='rock' && computerChoice=='rock'){
        return 'game draw';
    }

    else if(playerChoice=='paper' && computerChoice=='rock'){
        return 'you won! '+playerChoice+' beats '+computerChoice;
    }
    else if(playerChoice=='paper' && computerChoice=='scissor'){
        return 'You Lose! '+computerChoice+' beats '+playerChoice;
    }
    else if(playerChoice=='paper' && computerChoice=='paper'){
        return 'game draw';
    }

    
}



const playerChoice = 'rock';
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));