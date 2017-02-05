var gameOver = false;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
				"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesRemain = 10;
var wins = 0;
var losses = 0;
var lettersGuessed = [];

// Comp chooses letter
var letterChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event) {
	var guess = event.key;
}

function game() {
	if (guessesRemain == 0) {
		alert("You lose, Loser!");
		gameOver = true;
		losses = losses + 1;
		guessesRemain = 10;
		document.getElementById("lossesDiv").innerHTML = ("Losses: " + losses);
		console.log("game over - loss");
		console.log(losses)
}//if end

	else if (guessesRemain >0 && event.key == letterChoice) {	
   		gameOver = true;
   		wins = wins + 1;
   		guessesRemain = 10;
   		document.getElementById("winsDiv").innerHTML = ("Wins: " + wins);
   		alert ("You guessed correctly!");
   		console.log("game over - win");
   		console.log(wins);
}//else-if end

   	else {lettersGuessed.push(event.key);
   		guessesRemain = guessesRemain - 1;
   		document.getElementById("guessesLeftDiv").innerHTML = ("Guesses Left: " + guessesRemain);
   		// lettersGuessed.push(event.key);
   		document.getElementById("lettersUsedDiv").innerHTML = lettersGuessed.join("");
   		console.log("game continues");

}//else end

}//function end


//Runs game function
document.onkeyup = function(event) {
  var guess = event.key;
  game(guess);
}

