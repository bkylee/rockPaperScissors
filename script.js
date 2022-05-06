//Function to select the CPU output 
function computerPlay() {
    //Create play variable to get a random selection between 1-3. This will determine if 
    //Rock, Paper, or Scissors is selected by the computer. 
    let play = Math.floor(Math.random() * 3);

    //Use switch to select if CPU is using Rock, Paper, or Scissors based on the random int 
    switch (play) {
        case 1:
            play = "CHARMANDER";
            break;
        case 2: 
            play = "SQUIRTLE";
            break;
        default: 
            play = "BULBASAUR";
    }
    return play; 
} 

function round (playerSelect, computerSelect) {
//If the user selection is same as computer, prompt and try again.
    if (playerSelect === computerSelect) {
        winScreen.textContent = "Hard fought battle, but it's a draw. Pick another pokemon!";
    }
//if statements to verify who is the winner 
    else if (playerSelect === "CHARMANDER" && computerSelect === "SQUIRTLE") {
        return "Gary wins!";
    }else if (playerSelect === "SQUIRTLE" && computerSelect === "CHARMANDER") {
        return "Player 1 wins!";
    }else if (playerSelect === "SQUIRTLE" && computerSelect === "BULBASAUR") {
        return "Gary wins!";
    }else if (playerSelect === "BULBASAUR" && computerSelect === "SQUIRTLE") {    
        return "Player 1 wins!";
    }else if (playerSelect === "CHARMANDER" && computerSelect === "BULBASAUR") {
        return "Player 1 wins!";
    }else if (playerSelect === "BULBASAUR" && computerSelect === "CHARMANDER"){ 
        return "Gary wins!";
    }
}

//GLOBAL VARIABLES 


//Score tracking variables 
let p1Score = 0;
let CPUscore = 0; 


//string variables 
let winner = "";
let playerSelect = ""; 
let PCpick = "";


//DOM variables and event listeners 


const body = document.body;


//header to top the webpage 
const header = document.createElement('h1');
header.textContent = "CHOOSE YOUR POKEMON AND BATTLE GARY!";
body.appendChild(header);

//scores div to show the score of the match 
const scores  = document.createElement('div');
body.appendChild(scores);

//win div to show who won the last battle
const winScreen = document.createElement("div");
body.appendChild(winScreen);


//Pokemon variables and event listener to complete a round of battle based on who the user clicked on
const charmander = document.querySelector('#charmander');
body.appendChild(charmander);
charmander.addEventListener('click', () => {
    playerSelect = "CHARMANDER";
    PCpick = computerPlay()
    winner = round(playerSelect, PCpick);
    game();});

const bulbasaur = document.querySelector('#bulbasaur');
body.appendChild(bulbasaur);
bulbasaur.addEventListener('click', () => {
    playerSelect = "BULBASAUR";
    PCpick = computerPlay();
    winner = round(playerSelect, PCpick);
game();});

const squirtle = document.querySelector('#squirtle');
body.appendChild(squirtle);
squirtle.addEventListener('click', () => {
    playerSelect = "SQUIRTLE";
    PCpick = computerPlay();
    winner = round(playerSelect, PCpick);
game()});


//game function that's called when user clicks on a pokemon. Determines who wins based on "round" function 
//will add to counter based on who won the battle. 
//uses string vars to output results
//when either the player or CPU hits 5 wins, buttons are removed and game is completed with output of results. 

function game () {
    if (winner === "Player 1 wins!") {
        p1Score ++; 
        scores.textContent = `Player score = ${p1Score} Gary score = ${CPUscore}`;
        winScreen.textContent = "Player 1 Wins!";
        //show winning image screen thing
    }
else if (winner === "Gary wins!") {
    CPUscore ++; 
    scores.textContent = `Player score = ${p1Score} Gary score = ${CPUscore}`;
    winScreen.textContent = "Gary Wins!";
}

if (p1Score === 5) {
        winScreen.textContent = `You win with a score of ${p1Score} to ${CPUscore}!`;
        charmander.parentElement.removeChild(charmander);
        squirtle.parentElement.removeChild(squirtle);
        bulbasaur.parentElement.removeChild(bulbasaur);
    } 

else if (CPUscore === 5) {
        winScreen.textContent = `Gary wins with a score of ${CPUscore} to ${p1Score}!`;
        charmander.parentElement.removeChild(charmander);
        squirtle.parentElement.removeChild(squirtle);
        bulbasaur.parentElement.removeChild(bulbasaur);
    } 
}
