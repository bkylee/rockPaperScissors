
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
    let winner = (playerSelect === "CHARMANDER"  && computerSelect === "SQUIRTLE") ?
            computerSelect: 
            (playerSelect === "SQUIRTLE"  && computerSelect === "CHARMANDER") ?
            playerSelect:
            (playerSelect === "SQUIRTLE"  && computerSelect === "BULBASAUR") ?
            computerSelect:
            (playerSelect === "BULBASAUR"  && computerSelect === "SQUIRTLE") ?
            playerSelect:
            (playerSelect === "CHARMANDER"  && computerSelect === "BULBASAUR") ?
            playerSelect:
            (playerSelect === "BULBASAUR"  && computerSelect === "CHARMANDER") ?
            computerSelect:
            "WHat the fuck";
    alert(winner);       
    return winner; 
}

function game () {
    let p1Score = 0;
    let CPUscore = 0; 
    while (p1Score <5 || CPUscore <5) {
        playerSelect = prompt("Pick a Pokemon to battle: ");
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
    }
}

//game();
playerSelect = "bulbasaur";
something = computerPlay();
round();