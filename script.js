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
    let playerSelect = "";
//If the user inputs a non-valid choice, loop prompt until valid input
const charmander = document.querySelector('#charmander').addEventListener('click', ()=>
 playerSelect = "CHARMANDER");
const bulbasaur = document.querySelector('#bulbasaur').addEventListener('click', ()=>
 playerSelect = "BULBASAUR");
const squirtle = document.querySelector('#squirtle').addEventListener('click', ()=>
 playerSelect = "SQUIRTLE");
 
    if (playerSelect === computerSelect) {
        playerSelect = prompt("What a battle but it's a tie! Pick another Pokemon between SQUIRTLE, CHARMANDER, OR BULBASAUR!" ).toUpperCase;
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

// function game () {
//     let p1Score = 0;
//     let CPUscore = 0; 
//     while (p1Score <5 && CPUscore <5) {
//         playerSelect = prompt("Pick a Pokemon to battle! Choose between SQUIRTLE, CHARMANDER, OR BULBASAUR!").toUpperCase();
//             while (playerSelect !== "BULBASAUR" && playerSelect !== "SQUIRTLE" && playerSelect !== "CHARMANDER") {
//                 playerSelect = prompt("TRY AGAIN! Enter a pokemon between SQUIRTLE, CHARMANDER OR BULBASAUR!").toUpperCase();
//             }
//         PCpick = computerPlay();
//         winner = round(playerSelect, PCpick);
//         if (winner === "Player 1 wins!") {
//             p1Score ++;
//             console.log(winner);
//         }
//         else if (winner === "Gary wins!") {
//             CPUscore ++;
//             console.log(winner);
//         }
//     }
//     if (p1Score = 5) {
//         alert(`${winner} They beat the CPU with a score of 5 to ${CPUscore}!`);
//     } else {
//         alert(`${winner} Gary beat you with a score of 5 to ${p1Score}!`);
//     } 
//     }
// game();

const body = document.body; 

