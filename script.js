//Function to select the CPU output 
function computerPlay() {
    //Create play variable to get a random selection between 1-3. This will determine if 
    //Rock, Paper, or Scissors is selected by the computer. 
    let play = Math.floor(Math.random() * 3) + 1;

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
    let winner; 
    switch (winner) {
        //If player selects Charmander and CPU selects Squirtle
        case playerSelect === "CHARMANDER"  && computerSelect === "SQUIRTLE":
            winner = computerSelect;
            break; 
        case playerSelect === "SQUIRTLE"  && computerSelect === "CHARMANDER":
            winner = playerSelect;
            break; 
        case playerSelect === "SQUIRTLE"  && computerSelect === "BULBASAUR":
            winner = computerSelect;
            break; 
        case playerSelect === "BULBASAUR"  && computerSelect === "SQUIRTLE":
            winner = playerSelect;
            break; 
        case playerSelect === "CHARMANDER"  && computerSelect === "BULBASAUR":
            winner = playerSelect;
            break; 
        case playerSelect === "BULBASAUR"  && computerSelect === "CHARMANDER":
            winner = computerSelect;
            break; 
        default: 
            return "It's a tie";
        }
    return winner; 
}
let playerSelection= prompt("Please enter the pokemon you'd like to choose to battle").toUpperCase;
round(playerSelection, computerPlay());