let ciseau = document.querySelector('#ciseau');
let feuille = document.querySelector('#feuille');
let pierre = document.querySelector('#pierre');
let container = document.getElementById('container');
let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#score-ordi');
let button = document.querySelector('#button');


// Choice of bot for the play
function botGame () {
    let choixOrdi = Math.floor(Math.random() * 3);
    pierre = 0;
    feuille = 1;
    ciseau = 2;
    //computer choose rock
    if (choixOrdi === 0) {
        botGame = pierre;
        console.log('p');
    }
    else if (choixOrdi === 1) {
        //computer choose paper
        botGame = feuille;
        console.log('f')
    }
    else if (choixOrdi === 2) {
        //computer choose chisel
        botGame = ciseau;
        console.log('c')
    }
}

//event for the game
pierre.addEventListener('click', botGame);
feuille.addEventListener('click', botGame);
ciseau.addEventListener('click', botGame);

// Var for the score
playerScore = 0;
computerScore = 0;

// Defines the winner
function winner (event, botChoice) {
    //choice of player rock
    if (event === pierre) {
        if (botChoice === 2) {
            playerScore++
            container.innerHTML +='Vous gagnez cette manche !';
        }
        else {
            computerScore++
            container.innerHTML += "L'ordinateur gagne cette manche !";
        }
    }
    //choice of player paper
    if (event === feuille) {
        if (botChoice === 0) {
            playerScore++;
            container.innerHTML +='Vous gagnez cette manche !';
        }
        else {
            computerScore++;
            container.innerHTML += "L'ordinateur gagne cette manche !";
        }
    }
    //choice of player chisel
    if (event === ciseau) {
        if (botChoice === 1) {
            playerScore++;
            container.innerHTML +='Vous gagnez cette manche !';
        }
        else {
            computerScore++;
            container.innerHTML += "L'ordinateur gagne cette manche !";
        }
    }
}

container.innerHTML = winner;