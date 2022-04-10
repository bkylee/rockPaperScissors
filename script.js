
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
    let winner = "TBA"; 
    if (playerSelect === "CHARMANDER"  && computerSelect === "SQUIRTLE") {
        winner = "GARY";
    }else if (playerSelect === "SQUIRTLE"  && computerSelect === "CHARMANDER") {
        winner = "PLAYER";
    }else if (playerSelect === "SQUIRTLE"  && computerSelect === "BULBASAUR") {
        winner = "GARY";
    }else if (playerSelect === "BULBASAUR"  && computerSelect === "SQUIRTLE") {    
        winner = "PLAYER";
    }else if (playerSelect === "CHARMANDER"  && computerSelect === "BULBASAUR") {
        winner = "PLAYER";
    }else if (playerSelect === "BULBASAUR"  && computerSelect === "CHARMANDER"){ 
        winner = "GARY";
    }
    else prompt("Please try again")}

function game () {
    let p1Score = 0;
    let CPUscore = 0; 
    while (p1Score <5 || CPUscore <5) {
        playerSelect = prompt("Pick a Pokemon to battle: ").toUpperCase;
        PCpick = computerPlay();
        winner = round(playerSelect, PCpick);
        if (winner === playerSelect) {
            p1Score ++;
        }
        else if (winner === PCpick) {
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