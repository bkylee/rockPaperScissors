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
        alert("Please try again");
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

const charmander = document.querySelector('#charmander').addEventListener('click', () => {
    playerSelect = "CHARMANDER";
    PCpick = computerPlay()
    winner = round(playerSelect, PCpick);
    game();});

const bulbasaur = document.querySelector('#bulbasaur').addEventListener('click', () => {
    playerSelect = "BULBASAUR";
    PCpick = computerPlay();
    winner = round(playerSelect, PCpick);
game();});

const squirtle = document.querySelector('#squirtle').addEventListener('click', () => {
    playerSelect = "SQUIRTLE";
    PCpick = computerPlay();
    winner = round(playerSelect, PCpick);
game()});

function game () {

if (winner === "Player 1 wins!") {
    p1Score ++; 
    //show winning image screen thing
}
else if (winner === "Gary wins!") {
    CPUscore ++; 
}
    if (p1Score = 5) {
        alert(`${winner} You beat the CPU with a score of 5 to ${CPUscore}!`);
    } else {
        alert(`${winner} Gary beat you with a score of 5 to ${p1Score}!`);
    } 
}
