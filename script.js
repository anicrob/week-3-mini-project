//variables

//number of wins, losses, and ties to begin with
var wins = 0;
var losses = 0;
var ties = 0;

//input options
var options = ["R", "P", "S"];

//Play game function defined
var playGame = function () {

    //beginning prompt
    var userChoice = prompt("Enter 'R' for rock, 'P' for paper, or 'S' for scissors:");

    //if they hit cancel, stop function
    if(userChoice === null){
        return;
    }

    //make all options uppercase
    userChoice = userChoice.toUpperCase()

    //allow the computer to pick an option
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    //let the player know what the computer chose
    alert("The computer chose " + computerChoice);

    //If the user and computer tie
    if(userChoice === computerChoice){
        alert("You tied!");
        ties++;

    //if the user wins
    } else if (
        userChoice === "S" && computerChoice === "P" ||
        userChoice === "R" && computerChoice === "S" ||
        userChoice === "P" && computerChoice === "R" 
    ) {
        alert("You won!");
        wins++;

    //if the user loses
    } else {
        alert("Sorry, you lost :(");
        losses++;
    }

    //show them the stats
    alert(
        "Stats: \n Wins:" + wins + "\nLosses:" + losses + "\nTies:" + ties
    );

    //see if the user wants to play again
    var playAgain = confirm("Play Again?")

    //restart game if they want to play again
    if(playAgain){
        playGame();
    }
}
//Start the game on page open
playGame();

