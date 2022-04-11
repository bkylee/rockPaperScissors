
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
    if (playerSelect === computerSelect) {
        playerSelect =prompt("Please try again:" ).toUpperCase;
        round(playerSelect, computerSelect);
    }
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

function game () {
    let p1Score = 0;
    let CPUscore = 0; 
    while (p1Score <5 || CPUscore <5) {
        playerSelect = prompt("Pick a Pokemon to battle: ").toUpperCase;
        PCpick = computerPlay();
        winner = round(playerSelect, PCpick);
        if (winner === "PLAYER") {
            p1Score ++;
        }
        else if (winner === "GARY") {
            CPUscore ++;
        }
        else 
            alert("Please try again");
    
    console.log(`The Winner is ${winner}!`);
    return winner;
    }
}

//game();
playerSelect = "SQUIRTLE";
something = computerPlay();
winner = round(playerSelect, something);
console.log(winner);
