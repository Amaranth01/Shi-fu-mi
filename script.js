let ciseau = document.querySelector('#ciseau');
let feuille = document.querySelector('#feuille');
let pierre = document.querySelector('#pierre');
let container = document.getElementById('container');
let playerScoreContainer = document.querySelector('#player-score');
let computerScoreContainer = document.querySelector('#score-ordi');
let reset = document.querySelector('#button');
let computerChoice;
let playerChoice;


// Choice of bot for the play
function botGame () {
    let choixOrdi = Math.floor(Math.random() * 3);
    pierre = 0;
    feuille = 1;
    ciseau = 2;
    //computer choose rock
    if (choixOrdi === 0) {
        computerChoice = "pierre";
        console.log('p');
    }
    else if (choixOrdi === 1) {
        //computer choose paper
        computerChoice = "feuille";
        console.log('f')
    }
    else if (choixOrdi === 2) {
        //computer choose chisel
        computerChoice = "ciseau";
        console.log('c')
    }
}

// Var for the score
let playerScore = 0;
let computerScore = 0;

// Defines the winner
function winner (player, botChoice) {
    //choice of player rock
    if (player === "pierre") {
        if (botChoice === "ciseau") {
            playerScore++
            container.innerHTML = 'Vous gagnez cette manche !';
        } else if (botChoice === "feuille") {
            computerScore++
            container.innerHTML = "L'ordinateur gagne cette manche !";
        } else {
            container.innerHTML = "Egalité !"
        }
    }
    //choice of player paper
    if (player === "feuille") {
        if (botChoice === "pierre") {
            playerScore++;
            container.innerHTML = 'Vous gagnez cette manche !';
        } else if (botChoice === "ciseau") {
            computerScore++;
            container.innerHTML = "L'ordinateur gagne cette manche !";
        } else {
            container.innerHTML = "Egalité !"
        }
    }
    //choice of player chisel
    if (player === "ciseau") {
        if (botChoice === "feuille") {
            playerScore++;
            container.innerHTML = 'Vous gagnez cette manche !';
        } else if (botChoice === "pierre") {
            computerScore++;
            container.innerHTML = "L'ordinateur gagne cette manche !";
        } else {
            container.innerHTML += "Egalité !"
        }
    }
    playerScoreContainer.innerHTML = playerScore;
    computerScoreContainer.innerHTML = computerScore;
}

//event for the game
pierre.addEventListener('click', function (){
    playerChoice = "pierre";
    botGame();
    winner(playerChoice, computerChoice);
});
feuille.addEventListener('click', function (){
    playerChoice = "feuille";
    botGame();
    winner(playerChoice, computerChoice);
});
ciseau.addEventListener('click', function (){
    playerChoice = "ciseau";
    botGame();
    winner(playerChoice, computerChoice);
});