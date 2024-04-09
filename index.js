function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event){
    const buttonName = event.target.textContent; //retrieve the clicked button name.
    console.log("You chose: ", buttonName);

    const playerChoiceElement = document.getElementById('playerChoice');
    playerChoiceElement.textContent = "You chose: "+buttonName; //showing player choice on html page

    const computerChoice = getComputerChoice();
    console.log("Computer chose: ", computerChoice);

    const computerChoiceElement = document.getElementById('computerChoice');
    computerChoiceElement.textContent = "Computer chose: "+computerChoice;

    playRound(buttonName, computerChoice);
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const showResult = document.getElementById('result');

    if(playerChoice == computerChoice){
        console.log('Draw');

        showResult.textContent = "Draw";
    }
    else if(
        (playerChoice == 'rock' && computerChoice == 'scissor') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissor' && computerChoice == 'paper')
    ){
        console.log('You Won! '+ playerChoice + ' defeats ' + computerChoice);

        showResult.textContent = "You Won! "+ playerChoice + " defeats " + computerChoice;
    }
    else{
        console.log('You Lose! '+ computerChoice + ' defeats ' + playerChoice);

        showResult.textContent = "You Lose! "+ computerChoice + " defeats " + playerChoice;
    }
}


// function game(){
//     let player = 0;
//     let computer = 0;
//     for(let i=0;i<5;i++){
//         //const playerChoice = 'rock'; 
//         //const playerChoice = prompt("Enter your choice(rock, paper, scissor): ");
//         const computerChoice = getComputerChoice();

//         const result = (playRound(playerChoice, computerChoice));
//         console.log(result);

//         if(result.includes("Won")){
//             player++;
//         }else if(result.includes("Lose")){
//             computer++;
//         }
//     }
//     console.log('Player Wins: '+player);
//     console.log('Computer Wins: '+computer);

//     if(player>computer){
//         prompt("You Won the Round!");
//     }else if(computer>player){
//         prompt("Computer Won the Round!");
//     }else{
//         prompt("Round Tied");
//     }
// }

// game();