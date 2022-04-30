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
        return round(playerSelect, computerSelect);
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

function game () {
    let p1Score = 0;
    let CPUscore = 0; 
    winner = "";
const charmander = document.querySelector('#charmander');
charmander.addEventListener('click', () => {
    playerSelect = "CHARMANDER";
    PCpick = computerPlay();
    winner = round(playerSelect, PCpick);});
const bulbasaur = document.querySelector('#bulbasaur');

bulbasaur.addEventListener('click', () => {    playerSelect = "BULBASAUR";
PCpick = computerPlay();
winner = round(playerSelect, PCpick);});

const squirtle = document.querySelector('#squirtle');
squirtle.addEventListener('click', () => {    playerSelect = "SQUIRTLE";
PCpick = computerPlay();
winner = round(playerSelect, PCpick);});

if (winner === "Player 1 wins!") {
    p1Score ++; 
    //show winning image screen thing
}
else if (winner === "Gary wins!") {
    CPUscore ++; 
    //show gary winning screen thing 
}
else if (p1Score > 0 || CPUscore > 0) {
    //show "It's a tie battle, pick another pokemon"
}
else //show welcome to battle image/screen 
    //while (p1Score <5 && CPUscore <5) {
            // while (playerSelect !== "BULBASAUR" && playerSelect !== "SQUIRTLE" && playerSelect !== "CHARMANDER") {
            //     playerSelect = prompt("TRY AGAIN! Enter a pokemon between SQUIRTLE, CHARMANDER OR BULBASAUR!").toUpperCase();
            // }
        //PCpick = computerPlay();
    //     winner = round(playerSelect, PCpick);
    //     if (winner === "Player 1 wins!") {
    //         p1Score ++;
    //         console.log(winner);
    //     }
    //     else if (winner === "Gary wins!") {
    //         CPUscore ++;
    //         console.log(winner);
    //     }
    // }
    if (p1Score = 5) {
        alert(`${winner} They beat the CPU with a score of 5 to ${CPUscore}!`);
    } else {
        alert(`${winner} Gary beat you with a score of 5 to ${p1Score}!`);
    } 
}
game();
