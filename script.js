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

//game function that keeps score and determines who gets 5 wins first 
let p1Score = 0;
let CPUscore = 0; 

let winner = "";
let playerSelect = ""; 
let PCpick = "";

const body = document.body;
const scores  = document.createElement('div');
body.appendChild(scores);
const winScreen = document.createElement("div");
body.appendChild(winScreen);

const charmander = document.querySelector('#charmander');
charmander.addEventListener('click', () => {
    playerSelect = "CHARMANDER";
    PCpick = computerPlay()
    winner = round(playerSelect, PCpick);
    game();});

const bulbasaur = document.querySelector('#bulbasaur');
bulbasaur.addEventListener('click', () => {
    playerSelect = "BULBASAUR";
    PCpick = computerPlay();
    winner = round(playerSelect, PCpick);
game();});

const squirtle = document.querySelector('#squirtle');
squirtle.addEventListener('click', () => {
    playerSelect = "SQUIRTLE";
    PCpick = computerPlay();
    winner = round(playerSelect, PCpick);
game()});

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
